'use client';

import Image from "next/image";
const manufacturingImage = "/Industries/Image_1.svg";

const utilitiesImage = "/Industries/Image_2.svg";
const commercialFoodImage = "/Industries/Image_3.svg";

const industries = [
    {
        id: 1,
        name: "Steel & Manufacturing",
        description: "High-volume production environments where system downtime translates directly to production loss. ERP integration, shop-floor monitoring, and procurement automation are operationally critical — not optional.",
        image: manufacturingImage,
        deliverables: [
            "SAP-integrated MIS",
            "production monitoring platforms",
            "procurement intelligence",
            "IT manpower under SLA governance",
            "executive dashboards that surface operational exceptions in real time."
        ],
        imagePosition: "left" as const
    },
    {
        id: 2,
        name: "Commercial Food Courts & F&B Operators",
        description: "Multi-vendor food environments require centralised billing, revenue reconciliation, inventory control, and vendor performance management — with uptime commitments that match peak hours",
        image: commercialFoodImage,
        deliverables: [
            "Food ERP Platform — POS, vendor settlement",
            "inventory management",
            "franchise management",
            "full mobile app ecosystem",
            "executive dashboards that surface operational exceptions in real time."
        ],
        imagePosition: "left" as const
    },
    {
        id: 3,
        name: "Utilities & Infrastructure",
        description: "Operational continuity is regulatory and operational imperative. Systems must integrate field hardware, SCADA/IoT inputs, and management dashboards without failure.",
        image: utilitiesImage,
        deliverables: [
            "IoT device integration",
            "field asset monitoring",
            "infrastructure IT manpower",
            "IT manpower under SLA governance",
            "executive dashboards that surface operational exceptions in real time."
        ],
        imagePosition: "right" as const
    },

];

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
    const isImageLeft = industry.imagePosition === "left";

    return (
        <div className="w-full">
            {/* Industry Card Container */}
            <div
                className="rounded-3xl "
            // style={{ backgroundColor: "var(--color-neutral-200)" }}
            >
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* Image Section */}
                    <div className={`flex-1 min-w-0 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                        <div className="flex flex-col h-full">

                            <div
                                className="relative w-full h-[300px] mb-8 rounded-3xl"
                                style={{
                                    background: "linear-gradient(180deg, #FDF9FF 0%, rgba(253,249,255,0) 100%)"
                                }}
                            >
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className="object-none rounded-3xl"
                                />
                            </div>
                            {/* Industry Name and Description */}
                            <div>
                                <h3
                                    className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-primary"
                                    
                                >
                                    {industry.name}
                                </h3>
                                <p
                                    className="text-base lg:text-lg leading-relaxed"
                                    
                                >
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Deliverables */}
                    <div className={`flex-1 min-w-0 flex flex-col justify-start gap-10 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                        {/* Badge */}
                        <div
                            className="inline-block w-fit px-4 py-2 border rounded-2xl text-xs font-semibold tracking-wide"
                            style={{
                                borderColor: "var(--color-neutral-500)",
                                color: "var(--color-text-body)"
                            }}
                        >
                            IMPROVE PRODUCTIVITY
                        </div>

                        {/* Title */}
                        <h2
                            className="text-3xl lg:text-4xl font-bold leading-tight"
                            style={{ color: "var(--color-text-title)" }}
                        >
                            What we deliver
                        </h2>

                        {/* Description */}
                        <p
                            className="text-base lg:text-lg leading-relaxed"
                            style={{ color: "var(--color-text-body)" }}
                        >
                            Get rid of endless spreadsheets and binders collecting dust, or hours wasted on searching and emailing.
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-7">
                            {industry.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex gap-5 items-start">
                                    <span
                                        className="font-bold text-3xl shrink-0 leading-tight"
                                        style={{ color: "var(--color-primary-1)" }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <p
                                        className="text-base lg:text-lg leading-relaxed pt-1"
                                        style={{ color: "var(--color-text-body)" }}
                                    >
                                        {deliverable}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Section - "Less paper work, more people work!" */}
            <div className="my-20 text-center">
                <h2
                    className="text-3xl lg:text-5xl font-bold leading-tight"
                    style={{ color: "var(--color-text-title)" }}
                >
                    Less paper work, more{" "}
                    <span style={{ color: "var(--color-primary-1)" }}>people work!</span>
                </h2>
            </div>
        </div>
    );
}

export default function IndustriesContent() {
    return (
        <section className="w-full py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Industries Stack */}
                <div className="space-y-24">
                    {industries.map((industry) => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
