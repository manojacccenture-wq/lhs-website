"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import Button from "@/app/components/ui/Button";

const mockResources = [
  {
    id: "1",
    title: "Best practices for showcasing features",
    image: "http://localhost:3845/assets/67d94f91d70e1c321950deb5485ec1eacc574177.png",
    date: "Oct 13, 2025",
    type: "case-study" as const,
  },
  {
    id: "2",
    title: "Visual storytelling for complex products",
    image: "http://localhost:3845/assets/94c9b540adacfa3f0ddbb2e1999d3364cf14964e.png",
    date: "Oct 13, 2025",
    type: "blog" as const,
  },
  {
    id: "3",
    title: "How microinteractions boost user experience",
    image: "http://localhost:3845/assets/c6dc8b6d846a7eba115ba1368251d1ec0cb4d207.png",
    date: "Oct 13, 2025",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Why performance and accessibility matter",
    image: "http://localhost:3845/assets/cae655635618db88318090db01b16da2d1c86f23.png",
    date: "Oct 13, 2025",
    type: "case-study" as const,
  },
  {
    id: "5",
    title: "From idea to launch: SaaS UI/UX guide",
    image: "http://localhost:3845/assets/22bf11dbf991c3d0faf9d468b568a552ce5a2486.png",
    date: "Oct 13, 2025",
    type: "blog" as const,
  },
  {
    id: "6",
    title: "Simplifying user journeys for more signups",
    image: "http://localhost:3845/assets/4a2477798e2173ddd6cdd228f642761fb52860ad.png",
    date: "Oct 13, 2025",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

interface ResourcesCardsProps {
  type?: "case-study" | "blog" | "video";
}

export default function ResourcesCards({ type }: ResourcesCardsProps) {
  const [displayCount, setDisplayCount] = useState(6);
  const filteredResources = type ? mockResources.filter(r => r.type === type) : mockResources;
  const visibleResources = filteredResources.slice(0, displayCount);
  const hasMore = displayCount < filteredResources.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, filteredResources.length));
  };

  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {visibleResources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            variant="primary"
            className="rounded-full"
          >
            Load more
          </Button>
        </div>
      )}
    </section>
  );
}
