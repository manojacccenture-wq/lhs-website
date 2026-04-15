'use client';

import IndustryCard from "../../common/ui/IndustryCard";




export default function ProductsSplitSection() {
  return (
    <section className="py-16 md:py-24 px-6">

      <h2 className="mx-auto  text-center ">
        <span >"Simplify</span>
        <span className="text-primary">Workflows</span>
        <span>,</span>
        <span >Amplify,</span>
        <span className="text-primary">Productivity</span>

        <span>.”</span>
      </h2>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div >

        </div>
        <div >2</div>
      </div>

      <div>
        <IndustryCard
          industry={{
            id: 999,
            name: "Simplify Workflows",
            description:
              "We've unified F&B operations into a single platform that eliminates silos and reduces manual work.",
            image: "/Industries/Image_1.svg",
            deliverables: [
              "Real-time visibility into operations",
              "Streamlined workflows",
              "Data-driven decisions"
            ],
            imagePosition: "left"
          }}
        />
      </div>


    </section>
  );
}
