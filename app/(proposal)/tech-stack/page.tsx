// app/(proposal)/tech-stack/page.tsx
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

export default function TechStackPage() {
    return (
        <div className="prose max-w-none text-slate-700">
            {/* Page header */}
            <section className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                    Proposed Technology Stack & Rationale
                </h1>
                <p className="max-w-3xl text-slate-600">
                    The new Digivation website will be built on a modern, enterprise-grade
                    web stack used by leading global brands. The focus is on performance,
                    reliability, long-term maintainability and the ability to evolve as
                    Digivation&apos;s services and markets grow.
                </p>
            </section>

            {/* Core stack overview */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">11. Core Technology Stack</h2>
                <p className="max-w-3xl text-slate-600">
                    The foundation of the new site is a modern, JavaScript-based stack:
                </p>

                <div className="not-prose grid gap-6 md:grid-cols-2">
                    <motion.div
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="rounded-2xl border border-slate-800 bg-black p-6 shadow-xl shadow-slate-900/60 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/80"
                    >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Next.js (React Framework)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Production-ready React framework used for high-traffic websites.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Supports both static and server-rendered pages for speed and SEO.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Built-in routing, image optimisation and performance tooling.
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
                            Tailwind CSS (Styling)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Utility-first CSS framework for highly consistent, rapid UI development.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Ensures spacing, typography and colours are applied in a controlled, systemised way.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Reduces unused CSS and helps keep the site fast and lean.
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
                            Framer Motion (Micro-animations)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Library for subtle, high-quality animations (fade-ups, hover states, transitions).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Used sparingly to guide attention and signal polish, not as a distraction.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Fully compatible with React and Next.js.
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
                            Vercel (Hosting &amp; Deployment)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Cloud platform optimised specifically for Next.js applications.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Automated deployments, preview environments and global CDN by default.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Makes updates, improvements and new sections quick and low-risk to roll out.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Big brand proof points */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                    12. Global Brands Using Similar Technology
                </h2>
                <p className="max-w-3xl text-slate-600">
                    This stack is not experimental. It is the same class of technology
                    used by well-known global brands for high-visibility, high-traffic
                    digital experiences.
                </p>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                        12.1 Examples of Brands Using Next.js
                    </h3>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>
                            <span className="font-semibold">Nike</span> – uses Next.js to
                            power modern, content-rich and commerce-oriented experiences that
                            need to be fast and responsive worldwide.
                        </li>
                        <li>
                            <span className="font-semibold">Media and streaming platforms</span>{" "}
                            – use Next.js for marketing sites, content hubs and curated user
                            journeys that require strong SEO and performance.
                        </li>
                        <li>
              <span className="font-semibold">Technology companies and SaaS
              providers</span> – host their documentation, marketing and
                            onboarding experiences on Next.js for reliability and speed.
                        </li>
                    </ul>
                </div>

                <p className="max-w-3xl text-slate-600">
                    The relevance for Digivation is simple: the same underlying framework
                    trusted by these brands can be used to deliver a lean, fast and
                    future-ready site for an ICT and connectivity provider in South
                    Africa.
                </p>
            </section>

            {/* Benefits framed for Digivation specifically */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                    13. Benefits of This Stack for Digivation
                </h2>

                <div className="not-prose grid gap-6 md:grid-cols-3">
                    <motion.div
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="rounded-2xl border border-slate-800 bg-black p-6 shadow-xl shadow-slate-900/60 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/80"
                    >
                        <h3 className="mb-3 text-base font-semibold text-white">
                            Performance &amp; SEO
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">Fast page loads and smooth navigation.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Server-rendered and statically generated pages help search engines index content effectively.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">Improved experience on lower-bandwidth connections.</span>
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
                        <h3 className="mb-3 text-base font-semibold text-white">
                            Reliability &amp; Maintainability
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Component-based architecture makes it easy to update one section without breaking others.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    No dependency on heavy WordPress plugins or themes that can become outdated.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Clean separation of content, layout and styling for easier long-term maintenance.
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
                        <h3 className="mb-3 text-base font-semibold text-white">
                            Flexibility &amp; Future Growth
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    New pages, sections and campaigns can be added quickly without a redesign.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Compatible with APIs, dashboards and integrations if Digivation wants to surface more data in future.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Strong base for layering in more advanced features over time (e.g. forms, portals, self-service tools).
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Implementation notes / tying back to phases */}
            <section className="space-y-4 border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-semibold text-slate-900">
                    14. Implementation Approach
                </h2>
                <p className="max-w-3xl text-slate-600">
                    The implementation plan is phased to minimise risk and ensure that
                    Digivation sees tangible progress early in the project.
                </p>

                <ol className="list-decimal space-y-2 pl-6">
                    <li>
                        Finalise information architecture, visual direction and brand
                        updates.
                    </li>
                    <li>
                        Build the core page templates (Home, Services, Industries, About,
                        Insights, Contact) in Next.js and Tailwind.
                    </li>
                    <li>
                        Integrate the new imagery, icons and logo system into the
                        components.
                    </li>
                    <li>
                        Populate content and perform cross-browser, device and performance
                        testing.
                    </li>
                    <li>
                        Deploy to Vercel with a staging environment for review, followed by
                        final go-live.
                    </li>
                </ol>

                <p className="max-w-3xl text-slate-600">
                    The result is a modern, resilient and easily extensible platform that
                    gives Digivation room to grow without needing another full rebuild in
                    the near term.
                </p>
            </section>
        </div>
    );
}
