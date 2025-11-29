// app/(proposal)/page.tsx
"use client";

import { motion } from "framer-motion";

export default function ProposalOverviewPage() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="prose max-w-none text-center"
      >
        <h1>Digivation Website Build Proposal</h1>
        <h2>
          A modern, high-performance web experience to reposition Digivation as a
          focused, credible ICT partner in the South African market.
        </h2>
      </motion.div>
    </div>
  );
}
