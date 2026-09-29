# TEDxNITK Surathkal 2026 — Official Front Page

> **Recruitment Task for TEDxNITK Surathkal Web Team (2026–2027)**  
> **Repository Name:** `Tedx_2026_Recs_task`  
> **Theme:** *ALCHEMY NITK &bull; IDEAS WORTH SPREADING*  
> **Live Demo:** [https://postcssconfig-mu.vercel.app/](https://postcssconfig-mu.vercel.app/) *(Live on Vercel)*

---

## 📌 Overview

A complete, production-grade, immersive recreation of the **TEDxNITK Surathkal** front page built with modern frontend engineering principles. This application showcases high-performance 3D graphics, buttery smooth physics-based scrolling, custom micro-interactions, responsive storytelling, accessibility compliance, and a digital delegate pass generation system.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + CSS Custom Properties (Design Tokens in `src/styles/tokens.css` & `tailwind.config.js`)
- **3D Graphics:** Three.js via `@react-three/fiber` and `@react-three/drei`
- **Smooth Scrolling & Scroll Storytelling:** Lenis + GSAP (ScrollTrigger)
- **UI Transitions & Step Animations:** Framer Motion
- **Icons:** `lucide-react`
- **QR Code & Confetti:** `qrcode` & `canvas-confetti`
- **Fonts:** *Bebas Neue* & *Anton* (Display Headings), *Space Grotesk* & *Inter* (Body & Mono)

---

## 🎨 Brand Rules & Design System

| Token | CSS Variable | Hex Code | Usage |
|---|---|---|---|
| TED Red | `--ted-red` | `#E62B1E` | Primary accent, CTAs, glowing highlights |
| Dark Red | `--ted-red-dark` | `#B01E14` | Button hover states, deep gradients |
| Deep Black | `--black` | `#0A0A0A` | Primary background base |
| Charcoal | `--charcoal` | `#141414` | Glassmorphic cards, containers |
| Pure White | `--white` | `#FFFFFF` | Primary headings, high-contrast text |
| Muted Grey | `--grey-300` | `#BDBDBD` | Secondary body text, timestamps, labels |

### Design Language & Highlights
- **Cinematic Dark Motif:** Near-black background with SVG noise film-grain overlay (4% opacity).
- **Stage Spotlight:** Soft red radial cone that smoothly tracks cursor coordinates across the desktop viewport.
- **Custom Cursor:** Center glowing red dot with trailing magnetic ring that expands on interactive elements (automatically disabled on mobile/touch screens).
- **Wordmark Fidelity:** Adheres strictly to TED guidelines: **TED** (Red) + **x** (lowercase, Red) + **NITK Surathkal** (White).
- **8px Spacing Scale & Max Width 1280px:** Consistent spatial rhythm with 120–160px section padding on desktop and 60–80px on mobile.

---

## 🚀 Key Features by Section

### A. Preloader
- Black screen with dynamic SVG red **"x"** path animation, real-time 0–100% counter, and an easing curtain split reveal.
- Cached via `sessionStorage` to avoid repeating on page refreshes during the same session.

### B. Dynamic Navbar
- Fixed transparent header transitioning to frosted black glass with a subtle red baseline at scroll > 80px.
- `IntersectionObserver` active-section tracking, magnetic hover on the **"Register"** pill, and quick access to the **"Play Game"** mini-game.
- Full-screen responsive drawer menu with staggered entrance animations.

### C. Hero & 3D Interactive Centerpiece
- Extruded, beveled 3D Red **"X"** with ambient glow and real-time mouse parallax tilt using Three.js / React Three Fiber.
- Automatic 2D lightweight fallback for mobile viewports and users with `prefers-reduced-motion`.
- Scrubbed headline split: `"IDEAS WORTH SPREADING"` slides apart and fades gracefully on scroll.
- Three modular event info chips: **Date & Time**, **Curated Speakers**, and **Location**.

### D. 3D Flip-Card Countdown
- 4-tile countdown (Days, Hours, Minutes, Seconds) with 3D card-flip animations on value change.
- Automatic expiry detection that switches to a celebratory thank-you state after the target date passes.

### E. The Experience (Signature Scroll Section)
- Word-by-word scroll reveal paragraph detailing NITK's 15-year TEDx legacy.
- Infinite horizontal editions ticker (2011 to 2026).
- **Pinned Horizontal Scroll (Desktop):** 4 full-height feature panels with huge background numbering (01–04):
  1. *Location:* Wave and coastline globe animation.
  2. *Community Strength:* Dynamic counter animating to **6,000+** attendees.
  3. *Academic Heritage:* Glowing lightbulb motif.
  4. *Impactful Ideas:* Animated neural network brain lines.
- Responsive vertical stack on mobile devices.

### F. Speakers, Mini-Game & Past Archives
- 6 Mystery speaker cards with dark silhouettes, 3D tilt physics, sheen reflection sweep, and 3D card flip to reveal dossiers.
- **Idea Collector Mini-Game:** Canvas-based arcade game in a modal where players collect glowing idea dots to decrypt all speaker cards (includes **Skip** option).
- **Past Speakers Hall of Fame:** Double-row infinite marquee scrolling in opposite directions with pause-on-hover.

### G. What is TEDx?
- Split editorial layout with official TEDx licensing details.
- Scroll-scrubbed interactive SVG illustration featuring a hand reaching for the cosmic spark of curiosity.

### H. Tribute to Govind Jeevan
- Respectful, quiet aesthetic with dark minimalist styling, portrait, and expandable memorial narrative honoring Govind Jeevan's legacy.

### I. Multi-Step Registration & Digital Pass
- 4-step interactive form built with Framer Motion:
  1. Student Affiliation (NITK Student vs. External Delegate).
  2. Identity details (Full Name, Personal Email, `@nitk.edu.in` validation & Roll Number).
  3. Motivation statement with character counter (max 250 chars) and 10-digit phone verification.
  4. Review & Confirmation.
- Instant digital ticket generation with custom QR code (using `qrcode` package) and celebratory red/white confetti (`canvas-confetti`).
- Pluggable backend submission hook configured via `.env` (`VITE_REGISTER_URL`).

### J. Gallery Lightbox & Footer
- 6-photo masonry grid with fullscreen Lightbox supporting arrow key navigation and `Esc` key dismissal.
- Outlined continuous marquee `"SEE YOU THERE &bull; OCT 18"`.
- Social media links with QR code scanner and mandatory TED licensing disclaimer.

---

## 📂 Project Structure

```
Tedx_2026_Recs_task/
├── public/
│   ├── favicon.svg              # TEDx custom favicon
│   └── og-image.jpg             # OpenGraph preview asset
├── src/
│   ├── components/
│   │   ├── AboutTedx.tsx        # What is TEDx? section with scrubbed SVG
│   │   ├── Countdown.tsx        # 3D Flip countdown component
│   │   ├── Cursor.tsx           # Custom magnetic dot & ring cursor
│   │   ├── Experience.tsx       # Pinned horizontal scroll & ticker
│   │   ├── FloatingRegister.tsx # Floating CTA and back-to-top button
│   │   ├── Footer.tsx           # Footer with marquee, socials & license
│   │   ├── Gallery.tsx          # Photo archives with fullscreen lightbox
│   │   ├── Hero.tsx             # Hero section with headline split scrub
│   │   ├── Hero3D.tsx           # Three.js 3D X canvas & 2D fallback
│   │   ├── Navbar.tsx           # Fixed navbar with blur and drawer
│   │   ├── NotFoundModal.tsx    # 404 error modal view
│   │   ├── PacmanModal.tsx      # Speaker reveal arcade mini-game
│   │   ├── PastSpeakersMarquee.tsx # Double-row infinite marquee
│   │   ├── Preloader.tsx        # SVG stroke animation & curtain split
│   │   ├── RegisterForm.tsx     # 4-step registration wizard
│   │   ├── ScrollProgress.tsx   # Top progress bar indicator
│   │   ├── SpeakerCard.tsx      # 3D tilt & flip speaker card
│   │   ├── Speakers.tsx         # Speakers section container
│   │   ├── Spotlight.tsx        # Desktop stage spotlight motif
│   │   ├── ThemeModal.tsx       # Theme manifesto modal
│   │   ├── Ticket.tsx           # Digital attendee pass with QR generator
│   │   └── Tribute.tsx          # Quiet tribute memorial section
│   ├── data/
│   │   ├── editions.ts          # History, milestones & experience panels
│   │   ├── event.ts             # Global editable event configuration
│   │   ├── gallery.ts           # Photo gallery items & captions
│   │   └── speakers.ts          # Current & past speaker datasets
│   ├── hooks/
│   │   ├── useCountdown.ts      # Real-time countdown calculation
│   │   ├── useLenis.ts          # Lenis smooth scroll + GSAP ticker hook
│   │   ├── useMediaQuery.ts     # Responsive breakpoint hook
│   │   └── useReducedMotion.ts  # Accessibility motion preference hook
│   ├── styles/
│   │   ├── globals.css          # Global styling, grain, scrollbars
│   │   └── tokens.css           # CSS custom properties design tokens
│   ├── App.tsx                  # Root application orchestrator
│   ├── main.tsx                 # React entry point
│   └── vite-env.d.ts            # Environment typing
├── .env.example                 # Example environment variables
├── .gitignore
├── index.html                   # HTML shell with fonts & SEO meta
├── package.json
├── postcss.config.js
├── tailwind.config.js           # Design tokens, keyframes & fonts
├── tsconfig.json
└── vite.config.ts               # Vite configuration with chunk optimization
```

---

## ⚙️ How to Edit Event Content

All event metadata is centralized in `src/data/` so non-technical organizers can update dates, speakers, and venue details without editing components:

- **Change Date / Venue / Theme:** Edit [`src/data/event.ts`](file:///c:/Users/Admin/Downloads/nitk/src/data/event.ts)
  ```ts
  export const eventData = {
    theme: "ALCHEMY NITK",
    dateStr: "5:30 PM, 18 Oct 2026",
    targetDate: "2026-10-18T17:30:00+05:30",
    venue: { short: "SJA, NITK Surathkal", ... },
    ...
  };
  ```
- **Update Speakers & Dossiers:** Edit [`src/data/speakers.ts`](file:///c:/Users/Admin/Downloads/nitk/src/data/speakers.ts)
- **Edit Journey & Panels:** Edit [`src/data/editions.ts`](file:///c:/Users/Admin/Downloads/nitk/src/data/editions.ts)
- **Update Gallery Images:** Edit [`src/data/gallery.ts`](file:///c:/Users/Admin/Downloads/nitk/src/data/gallery.ts)

---

## 💻 Installation & Setup

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Tedx_2026_Recs_task.git
   cd Tedx_2026_Recs_task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Production Build & Preview:**
   ```bash
   npm run build
   npm run preview
   ```

---

## ♿ Accessibility & Performance

- **WCAG AA Compliance:** High color contrast ratio (white text `#FFFFFF` on dark base `#0A0A0A`).
- **Keyboard Navigation:** Full tab order, Enter/Space handlers on interactive cards and galleries, `Esc` dismissals on modals, and a dedicated `"Skip to main content"` link.
- **Prefers Reduced Motion:** Disables 3D WebGL rotation, Lenis smooth scrolling, heavy parallax, and preloader animations when the user requests reduced motion.
- **Optimized Assets & Code Splitting:** Three.js, animations, and icons are separated into dedicated Rollup chunks to minimize First Contentful Paint (FCP).

---

## 🎬 Demo Video Script (60–90 Seconds)

- **[0:00 - 0:05] Intro:**  
  *"Hello! I'm presenting the TEDxNITK Surathkal 2026 recruitment task built with React 18, TypeScript, Tailwind, Three.js, GSAP, and Framer Motion."*
- **[0:05 - 0:20] Preloader & Hero:**  
  *"Notice the preloader drawing the iconic red 'x', followed by our 3D extruded centerpiece tilting dynamically with the mouse. As we scroll, 'IDEAS WORTH SPREADING' splits apart horizontally via GSAP ScrollTrigger."*
- **[0:20 - 0:35] Countdown & The Experience:**  
  *"Here is the 3D flip card countdown to October 18. Below it, the intro text reveals word-by-word into our pinned horizontal scroll showcasing NITK's coastline, 6000+ attendees, legacy, and idea catalysts."*
- **[0:35 - 0:50] Mystery Speakers & Mini-Game:**  
  *"The 6 speaker cards have 3D physics tilt and light sheen. Clicking 'Speaker Reveal' opens our retro arcade game to collect idea dots and decrypt all dossiers."*
- **[0:50 - 0:58] Past Speakers, About & Tribute:**  
  *"We have a dual-direction infinite marquee of past luminaries, an interactive spark illustration, and a quiet, respectful tribute to Govind Jeevan."*
- **[0:58 - 1:10] Multi-Step Registration & Digital Pass:**  
  *"The registration wizard features 4 animated steps, input validation, and generates a personalized digital delegate ticket with an encoded QR pass and confetti."*
- **[1:10 - 1:20] Responsive & Mobile Demo:**  
  *"Shrinking down to 360px shows our smooth full-screen drawer menu and lightweight 2D fallback."*
- **[1:20 - 1:25] Outro:**  
  *"Thank you! The code is hosted in `Tedx_2026_Recs_task` with zero build warnings and clean architecture."*

---

## 📜 Credits & License

- **TEDx License Notice:** *This independent TEDx event is operated under license from TED.*
- **Event Team:** TEDxNITK Surathkal (National Institute of Technology Karnataka, Surathkal).
- **Recruitment Submission:** 2026–2027 Web Team.
