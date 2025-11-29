"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// UPDATED: Added Intro item pointing to /executive-summary
const links = [
    { href: "/", label: "Overview" },
    { href: "/executive-summary", label: "Intro" },
    { href: "/visual-identity", label: "Visual Identity" },
    { href: "/market-benchmark", label: "Market" },
    { href: "/tech-stack", label: "Tech Stack" },
    { href: "/next-steps", label: "Next Steps" },
];

export default function ProposalNav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-3 text-xs md:text-sm">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            "rounded-full px-4 py-1.5 transition-colors",
                            isActive
                                ? "bg-slate-900 text-white shadow-sm"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        )}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
