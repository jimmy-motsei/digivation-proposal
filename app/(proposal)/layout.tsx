// app/(proposal)/layout.tsx
import type { ReactNode } from "react";
import ProposalNav from "@/components/ProposalNav";
import ProposalFooter from "@/components/ProposalFooter";

export default function ProposalLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <div className="text-sm font-medium text-slate-600">
                        Digivation Website Rebuild Proposal
                    </div>
                    <ProposalNav />
                </div>
            </header>

            <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
                {children}
            </main>

            <ProposalFooter />
        </div>
    );
}
