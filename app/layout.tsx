// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
        <Analytics />
        </body>
        </html>
    );
}
