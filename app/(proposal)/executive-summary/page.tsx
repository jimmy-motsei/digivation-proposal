// app/(proposal)/executive-summary/page.tsx

export default function ExecutiveSummaryPage() {
    return (
        <div className="prose max-w-none text-slate-700">
            {/* Header */}
            <section className="space-y-3 mb-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                    Executive Summary
                </h1>
                <p className="text-slate-600 max-w-3xl text-lg leading-relaxed">
                    This proposal sets out a focused plan to rebuild the Digivation website on a
                    modern, high-performance foundation. Our goal is to create a faster, clearer
                    and more credible digital presence that reflects Digivation&apos;s role as an
                    implementation-led ICT partner in the South African market.
                </p>
                <p className="text-slate-600 max-w-3xl leading-relaxed">
                    The following sections cover the recommended visual identity refresh, market
                    benchmark, technical stack and delivery approach needed to deliver a site that
                    is easier to maintain, easier to scale and better aligned with how enterprise
                    and business customers evaluate ICT providers online.
                </p>
            </section>

            {/* Two-column summary */}
            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">
                        What This Rebuild Focuses On
                    </h2>
                    <ul className="mt-3 space-y-2">
                        <li>Clarifying the site structure and messaging for key audiences.</li>
                        <li>Refreshing the visual identity for a more modern, confident feel.</li>
                        <li>Reducing technical debt and plugin reliance from the legacy stack.</li>
                        <li>Improving performance, responsiveness and maintainability.</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Outcomes for Digivation
                    </h2>
                    <ul className="mt-3 space-y-2">
                        <li>A premium online presence aligned with leading SA ICT providers.</li>
                        <li>
                            A Next.js-based site that is faster, more secure and easier to extend.
                        </li>
                        <li>
                            A reusable design system for future pages, campaigns and landing
                            experiences.
                        </li>
                        <li>
                            A clearer story for decision-makers on what Digivation does and how it
                            delivers value.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
