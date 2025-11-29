// app/(proposal)/visual-identity/page.tsx
"use client";

import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function VisualIdentityPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      className="prose max-w-none"
    >
      <h1>Visual Identity, Imagery & Moodboard</h1>
      <p>
        A refreshed, digital-first visual system for Digivation: logo, colour,
        typography and imagery that project a modern, credible ICT partner to
        the South African market.
      </p>

      <h2>4. Visual Style Board</h2>
      <h3>4.1 Overall Look & Feel</h3>
      <ul>
        <li>Clean, modern, enterprise-grade visual language.</li>
        <li>
          Inspired by leading cloud / ICT brands (AWS, Cisco, Microsoft,
          Liquid) but with a distinct Digivation character.
        </li>
        <li>
          Minimal, spacious layouts with strong typography and a clear
          content hierarchy.
        </li>
        <li>
          Subtle motion to signal polish and modernity, never distraction.
        </li>
      </ul>

      <h3>4.2 Colour Direction</h3>
      <ul>
        <li>
          <span className="font-semibold">Primary colour:</span> modernised
          Digivation Green, refined specifically for digital use.
        </li>
        <li>
          <span className="font-semibold">Secondary colour:</span> a deep,
          confident dark tone (charcoal / navy) used for backgrounds and
          typography.
        </li>
        <li>
          <span className="font-semibold">Accent colours:</span> 1–2 subtle
          accents for highlights, CTAs and key data points.
        </li>
        <li>
          <span className="font-semibold">Neutrals:</span> a greyscale ramp
          for cards, section dividers and surfaces.
        </li>
      </ul>

      <h3>4.3 Typography</h3>
      <ul>
        <li>
          <span className="font-semibold">Headings:</span> strong, modern
          sans-serif with clear weight and presence.
        </li>
        <li>
          <span className="font-semibold">Body:</span> highly legible
          sans-serif optimised for screen reading.
        </li>
        <li>
          Structured type scale (H1–H6, body, small) with consistent
          line-height and spacing for readability.
        </li>
      </ul>

      <h3>4.4 Layout & Components</h3>
      <ul>
        <li>Card-based layouts for services, industries and insights.</li>
        <li>Generous spacing between sections to improve scannability.</li>
        <li>Clear, responsive grid system (mobile-first).</li>
        <li>
          Reusable components: hero blocks, service tiles, industry tiles,
          insights cards, CTA strips.
        </li>
      </ul>

      <h3>4.5 Motion</h3>
      <ul>
        <li>Subtle fade-up on scroll for key content blocks.</li>
        <li>Gentle hover states on cards and buttons.</li>
        <li>
          Motion is used to guide attention and signal quality, not as a
          visual gimmick.
        </li>
      </ul>

      <h2>5. Image Production Plan</h2>
      <p>
        The current site relies on inconsistent, low-quality photography. We
        will replace this with a cohesive, high-resolution image library
        generated specifically for the new Digivation experience.
      </p>

      <h3>5.1 Homepage</h3>
      <ul>
        <li>
          <span className="font-semibold">Hero image:</span> abstract,
          technology-forward visual representing connectivity and
          infrastructure, designed to work with overlay text.
        </li>
        <li>
          <span className="font-semibold">Service overview visual:</span>{" "}
          simple graphic aligning to the five core service pillars.
        </li>
        <li>
          <span className="font-semibold">Partners / ecosystem panel:</span>{" "}
          clean layout to showcase vendor and partner logos.
        </li>
      </ul>

      <h3>5.2 Services</h3>
      <p>
        For each of the five service categories (Connectivity, Security,
        Cloud, Voice & Unified Communications, Managed IT Support) we
        will produce:
      </p>
      <ul>
        <li>
          Category hero visual that hints at the domain (e.g. network
          topology, secure grid, cloud fabric, call flows).
        </li>
        <li>
          3–5 supporting icons per category to represent key features or
          benefits.
        </li>
      </ul>

      <h3>5.3 Industries</h3>
      <p>
        For priority industries (Retail, Healthcare, Hospitality, Public
        Sector, Banking, Logistics) we will create:
      </p>
      <ul>
        <li>
          Industry banner images that hint at each environment while keeping
          the style consistent across all sectors.
        </li>
      </ul>

      <h3>5.4 About, Team & Culture</h3>
      <ul>
        <li>
          Conceptual "team / collaboration" visuals instead of generic
          office stock photography.
        </li>
        <li>
          Optional abstract representations of leadership and culture if
          formal photos are not available.
        </li>
      </ul>

      <h3>5.5 Insights / Articles</h3>
      <ul>
        <li>
          A set of 6–8 reusable abstract thumbnails, mapped to content
          categories such as Cloud, Security, Connectivity and Strategy.
        </li>
      </ul>

      <h3>5.6 Brand System Assets</h3>
      <ul>
        <li>New Digivation brand icon for favicon and social avatars.</li>
        <li>
          Logo renders for light and dark backgrounds in multiple formats.
        </li>
        <li>
          Favicon exports in 16×16, 32×32 and 48×48 sizes, optimised for
          browsers and devices.
        </li>
      </ul>

      <h2>6. Moodboard</h2>
      <p>
        The moodboard defines the emotional and visual tone of the new
        Digivation experience. Every design and image choice will align with
        this direction.
      </p>

      <ul>
        <li>
          <span className="font-semibold">Modern enterprise ICT:</span> bold
          headings, confident layouts and calm use of negative space.
        </li>
        <li>
          <span className="font-semibold">Abstract, technology-driven
          imagery:</span> network lines, data flows, signal waves and subtle
          gradients instead of literal "tower" or "mast" photography.
        </li>
        <li>
          <span className="font-semibold">Grounded, not sci-fi:</span> feels
          current and practical, linked to real-world connectivity and
          infrastructure.
        </li>
        <li>
          <span className="font-semibold">Colour mood:</span> refined green
          balanced with deep darks and neutral greys; occasional accents used
          sparingly for emphasis.
        </li>
        <li>
          <span className="font-semibold">Brand personality:</span> reliable,
          capable, future-aware and calm under complexity.
        </li>
      </ul>

      <h2>7. Brand Identity Refresh (Logo & Colours)</h2>
      <p>
        The current Digivation logo is effectively a copy of a copy, with no
        formal brand system or digital guidelines. As part of the rebuild we
        propose a light-touch but high-impact identity refresh.
      </p>

      <h3>7.1 Logo System</h3>
      <ul>
        <li>Primary horizontal lockup for most digital use.</li>
        <li>Stacked / vertical variant for constrained spaces.</li>
        <li>Compact mark for small UI elements and social profiles.</li>
        <li>
          Vector master files (SVG, PDF, AI/EPS) plus web-ready exports
          (SVG, PNG).
        </li>
      </ul>

      <h3>7.2 Brand Icon & Favicon</h3>
      <ul>
        <li>
          New brand icon derived from the core logo, used consistently for
          favicon, social avatars and UI markers.
        </li>
        <li>
          Exported in all required sizes for browsers, mobile and desktop
          environments.
        </li>
      </ul>

      <h3>7.3 Colour Palette</h3>
      <ul>
        <li>Refined primary green as the core Digivation colour.</li>
        <li>
          Strong secondary dark tone for backgrounds and typography to
          anchor the UI.
        </li>
        <li>
          Neutral greyscale ramp for surfaces, cards and dividers.
        </li>
        <li>
          One or two accent colours used sparingly for CTAs and key
          highlights.
        </li>
      </ul>

      <h3>7.4 Lightweight Digital Brand Guide</h3>
      <ul>
        <li>Logo usage examples and safe-space rules.</li>
        <li>Colour specifications (HEX / RGB) for digital use.</li>
        <li>Typography pairings and hierarchy.</li>
        <li>Spacing, components and basic dos / don'ts.</li>
      </ul>

      <p>
        This is a small, focused brand exercise with a large impact: it
        ensures the new website does not just look modern, but feels like a
        coherent, trustworthy ICT brand from the first impression.
      </p>
    </motion.div>
  );
}