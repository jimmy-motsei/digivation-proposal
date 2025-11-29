// app/(proposal)/market-benchmark/page.tsx
"use client";

import { motion } from "framer-motion";

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function MarketBenchmarkPage() {
    return (
        <div className="prose max-w-none text-slate-700">
            {/* Page header */}
            <section className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                    Market Benchmark &amp; Competitive Context
                </h1>
                <p className="max-w-3xl text-slate-600">
                    We reviewed how leading South African telecom and ICT providers present
                    themselves online, and how Digivation can match or exceed those expectations
                    with a focused, modern experience.
                </p>
            </section>

            {/* SA telecom & ICT references */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                    8. South African Telecom &amp; ICT Reference Check
                </h2>
                <p className="max-w-3xl text-slate-600">
                    The South African telecom market is dominated by a small group of major
                    players. Their websites set an informal benchmark for what business and
                    enterprise customers expect from an ICT or connectivity partner.
                </p>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                        8.1 Reference Providers
                    </h3>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>
                            <span className="font-semibold">Vodacom South Africa</span> – strong
                            segmentation between consumer, business and enterprise, clear packaging
                            of connectivity and cloud offerings.
                        </li>
                        <li>
                            <span className="font-semibold">MTN South Africa</span> – bold visual
                            identity, prominent promotion of network reach and innovation,
                            structured product navigation.
                        </li>
                        <li>
                            <span className="font-semibold">Telkom SA</span> – converged fixed and
                            mobile proposition with a focus on bundles, business connectivity and
                            value-led offers.
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                        8.2 What These Sites Typically Do Well
                    </h3>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>Clear entry points for different customer types.</li>
                        <li>
                            Concise packaging of offers (bundles, plans, solutions) with simple
                            naming and visual grouping.
                        </li>
                        <li>
                            Strong use of colour and typography to signal hierarchy and direct
                            attention to primary CTAs.
                        </li>
                        <li>
                            Reassurance elements such as coverage, scale, years in market and
                            partnerships.
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                        8.3 Common Gaps &amp; Pain Points
                    </h3>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>
                            Overloaded homepages and category pages with too many competing
                            messages.
                        </li>
                        <li>
                            Technical language that can be difficult for non-technical
                            decision-makers to parse quickly.
                        </li>
                        <li>
                            Limited storytelling around implementation quality, support and
                            outcomes for business customers.
                        </li>
                        <li>
                            Inconsistent use of imagery and iconography across older and newer
                            sections of the sites.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Digivation positioning vs market */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                    9. Digivation&apos;s Opportunity in This Landscape
                </h2>
                <p className="max-w-3xl text-slate-600">
                    Digivation does not need to compete with the major network operators on
                    brand size or consumer mindshare. Instead, the opportunity is to present as a
                    focused, expert implementation and solutions partner that operates alongside
                    these networks.
                </p>

                {/* Cards: black background, readable text, borders, glow, icons, motion */}
                <div className="not-prose grid gap-6 md:grid-cols-2">
                    <motion.div
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="rounded-2xl border border-slate-800 bg-black p-6 shadow-xl shadow-slate-900/60 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/80"
                    >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Where We Align with Market Leaders
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Clear articulation of connectivity and ICT service pillars.
                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Professional, confident visual identity appropriate for
                  enterprise and public-sector clients.
                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Simple navigation that makes it easy to find solutions by need or
                  by industry.
                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="rounded-2xl border border-slate-800 bg-black p-6 shadow-xl shadow-slate-900/60 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/80"
                    >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Where Digivation Can Stand Apart
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Leaner, faster site with no legacy bloat or plugin overhead.
                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Plain-language explanation of solutions and outcomes for
                  decision-makers.
                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  Stronger emphasis on implementation quality, support and
                  long-term partnership.
                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                  A unified visual and content system that is coherent end to end.
                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <p className="max-w-3xl text-slate-600">
                    The proposed redesign positions Digivation as a specialist partner that
                    understands the same technologies and markets as the major operators, but
                    communicates with more clarity, focus and agility.
                </p>
            </section>

            {/* Link forward to tech-stack justification */}
            <section className="space-y-3 border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-semibold text-slate-900">
                    10. From Market Fit to Technical Foundation
                </h2>
                <p className="max-w-3xl text-slate-600">
                    To support this positioning, the site is built on a modern web stack that is
                    also trusted by leading global brands. The next section details the proposed
                    technology stack and examples of international companies using the same
                    framework to power high-traffic, high-value digital experiences.
                </p>
            </section>
        </div>
    );
}
