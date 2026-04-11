"use client";
import React, { useState } from 'react'
import Button from '../../ui/Button'
import FeatureCard from '../../ui/FeatureCard'
import Image from 'next/image'

const slides = [
    {
        variant: "green",
        title: "Run Smarter Food Operations Across Every Outlet.",
        description:
            "Streamline kitchen, inventory, and sales with a single ERP solution that scales with your franchise.",
    },
    {
        variant: "blue",
        title: "Year founded",
        description:
            "First enterprise deployment in industry. SAP integration capability established.",
    },
    {
        variant: "yellow",
        title: "Year founded",
        description:
            "First enterprise deployment in industry. SAP integration capability established.",
    },
] as const;

type PhoneImageProps = {
    src: string;
};

function PhoneImage({ src }: PhoneImageProps) {

    return (
        <div className={`relative `}>
            <Image src={src} alt="phone" width={180}
                height={360}
                className="h-[260px] w-auto object-contain" />
        </div>
    );
}

const GalleryModal = () => {
    const [index, setIndex] = useState(0);
    

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    return (
        <>
            {/* CARD */}
            < div className=" flex justify-center" >
                <div
                    key={index}  // 🔥 IMPORTANT (forces re-animation)
                    className="animate-fade"
                >
                    <FeatureCard
                        variant={slides[index].variant}
                        title={slides[index].title}
                        description={slides[index].description}
                        icon={
                            <span className="relative block w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                                <Image src="/Circle.png" alt="icon" fill className="object-contain" />
                            </span>
                        }
                    >
                        {/* PHONES (UNCHANGED) */}
                        <div className="absolute -top-16 flex items-center gap-0 z-10">
                            <PhoneImage src="/phone_1.svg" />
                            <PhoneImage src="/phone_2.svg" />
                            <PhoneImage src="/phone_3.svg" />
                        </div>
                    </FeatureCard>
                </div>
            </ div>

            <div className="mt-6 flex justify-center items-center gap-4">
                <Button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                    ←
                </Button>

                <Button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                    →
                </Button>
            </div>
        </>
    )
}

export default GalleryModal