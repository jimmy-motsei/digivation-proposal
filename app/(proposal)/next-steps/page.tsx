// app/(proposal)/next-steps/page.tsx
"use client";

import { motion } from "framer-motion";

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function NextStepsPage() {
    return (
        <div className="prose max-w-none text-slate-700">
            {/* Page header */}
            <section className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                    Next Steps & Engagement Model
                </h1>
                <p className="max-w-3xl text-slate-600">
                    This section outlines how we propose to move from approval to launch,
                    the phases involved, and the kind of collaboration we will need from
                    the Digivation team.
                </p>
            </section>

            {/* Project phases */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">15. Project Phases</h2>
                <p className="max-w-3xl text-slate-600">
                    The project is structured into clear, sequential phases. Each phase
                    has specific deliverables and decision points to keep the work focused
                    and predictable.
                </p>

                <div className="not-prose space-y-4">
                    <motion.div
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="rounded-2xl border border-slate-800 bg-black p-6 shadow-xl shadow-slate-900/60 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/80"
                    >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Phase 1 — Alignment &amp; Discovery
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">Confirm objectives, audiences and priorities for the site.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Finalise information architecture (navigation and page hierarchy).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Agree on the visual direction, logo refinements and colour palette.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Confirm which existing content will be reused, rewritten or retired.
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
                            Phase 2 — Design System &amp; Prototypes
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Design key page templates (Home, Services, Industries, About, Insights, Contact).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Establish reusable components (cards, CTAs, grids, navigation).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Integrate the refreshed logo, icon and colour system.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Present an interactive prototype for review and feedback.
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
                            Phase 3 — Build &amp; Content Integration
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Implement the site in Next.js, Tailwind CSS and Framer Motion.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Generate and integrate the new imagery and icon sets across the site.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Migrate and rewrite content based on the agreed structure and tone.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Configure forms, basic tracking and any required integrations.
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
                            Phase 4 — Testing, Review &amp; Launch
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Cross-browser and device testing (desktop, tablet, mobile).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Performance checks and optimisation where needed.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Final content and visual review with the Digivation team.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Launch on Vercel and decommission of legacy pages as agreed.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Collaboration & responsibilities */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                    16. Collaboration & Responsibilities
                </h2>
                <p className="max-w-3xl text-slate-600">
                    To keep the project efficient and focused, we propose a simple,
                    collaborative working model with clear responsibilities on both
                    sides.
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
                            MaruOnline / Delivery Partner
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">Lead the design, UX and technical implementation.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">Develop the visual identity refresh and image system.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Draft and structure core content based on existing material and the new IA.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Manage deployment, testing and performance optimisation.
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
                            Digivation Team
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-[15px]">
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Provide access to current site assets and any critical reference documents.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Validate messaging, service descriptions and industry priorities.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Review and approve visual direction, logo refinements and key templates.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                                <span className="text-slate-100">
                                    Nominate a small core group for consolidated feedback and approvals.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* High-level timing */}
            <section className="space-y-4 border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-semibold text-slate-900">17. Indicative Timeline</h2>
                <p className="max-w-3xl text-slate-600">
                    The final timeline will depend on the level of content rewrite and
                    the speed of feedback, but a typical implementation for a project of
                    this scope would be:
                </p>

                <ul className="list-disc space-y-1 pl-6">
                    <li>
                        Phase 1 &ndash; Alignment &amp; Discovery: approximately 1–2 weeks
                    </li>
                    <li>Phase 2 &ndash; Design System &amp; Prototypes: 2–3 weeks</li>
                    <li>Phase 3 &ndash; Build &amp; Content Integration: 3–4 weeks</li>
                    <li>Phase 4 &ndash; Testing, Review &amp; Launch: 1–2 weeks</li>
                </ul>

                <p className="max-w-3xl text-slate-600">
                    These phases can be adjusted based on urgency, internal priorities and
                    how much of the existing content is reused versus rewritten.
                </p>
            </section>

            {/* Decision, CTA + email buttons */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">18. Decision &amp; Next Step</h2>
                <p className="max-w-3xl text-slate-600">
                    If Digivation is comfortable with this direction, the next step is to
                    confirm the scope and phase approach so that we can schedule the
                    Alignment &amp; Discovery sessions and begin work on the new
                    experience.
                </p>

                <div className="not-prose rounded-2xl border border-slate-800 bg-black p-6 space-y-3 shadow-xl shadow-slate-900/60">
                    <p className="text-white font-semibold">Recommended next action:</p>
                    <p className="text-slate-100">
                        Confirm approval in principle for the rebuild approach and schedule
                        an Alignment &amp; Discovery workshop to lock down priorities,
                        content scope and timing.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-4 flex flex-wrap gap-3">
                        {/* 1) Approve proposal */}
                        {/* 1) Approve proposal */}
                        <a
                            href="mailto:hello@maruonline.com?subject=Digivation%20Website%20Rebuild%20Proposal%20-%20Approval&body=Hi%20MaruOnline%20team%2C%0D%0A%0D%0AWe%20are%20happy%20to%20proceed%20with%20the%20Digivation%20website%20rebuild%20as%20outlined%20in%20the%20proposal.%0D%0A%0D%0AWe%20thank%20you%20for%20the%20opportunity%20to%20present%20our%20thoughts%20on%20this%20project.%20We%20will%20prepare%20and%20send%20through%20a%20detailed%20cost%20estimate%20outlining%20proposed%20costings%20for%20the%20project%20build.%0D%0A%0D%0ARegards%2C%0D%0A"
                            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
                        >
                            Approve Proposal
                        </a>

                        {/* 2) Comments / Feedback */}
                        <a
                            href="mailto:hello@maruonline.com?subject=Digivation%20Website%20Rebuild%20Proposal%20-%20Comments%20%2F%20Feedback&body=Hi%20MaruOnline%20team%2C%0D%0A%0D%0AWe%20have%20the%20following%20comments%20or%20questions%20about%20the%20Digivation%20website%20rebuild%20proposal%3A%0D%0A%0D%0A-%20%0D%0A-%20%0D%0A-%20%0D%0A%0D%0AWe%20thank%20you%20for%20the%20opportunity%20to%20present%20our%20thoughts%20on%20this%20project.%20We%20will%20prepare%20and%20send%20through%20a%20detailed%20cost%20estimate%20outlining%20proposed%20costings%20for%20the%20project%20build.%0D%0A%0D%0ARegards%2C%0D%0A"
                            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:bg-slate-800"
                        >
                            Send Comments / Feedback
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}
