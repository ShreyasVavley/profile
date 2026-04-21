# ✦ Midnight Obsidian — Shreyas Vavley's Portfolio

> *"Building Intelligent Systems."*

A cinematic, scroll-driven portfolio built with Vite + React — featuring immersive 3D environments, interactive terminal access, and a glassmorphic dark design system.

🔗 **Vercel:** [profile-eosin-six.vercel.app](https://profile-eosin-six.vercel.app/)
🔗 **Netlify:** [shrprofile.netlify.app](https://shrprofile.netlify.app/)

---

## ✦ Showcase

| Section | Description |
|---|---|
| **Core** | Hero landing with animated name reveal and Spline 3D background |
| **The Interface** | Nexus Stream — Full-stack Cinematic OTT Platform showcase |
| **The Intelligence** | RAG Architecture — Second Brain & Vavley AI projects |
| **The Analyst** | WhatsApp Pro Analyzer with live toggle between modes |
| **System Access** | Interactive terminal with live command responses |

---

## ✦ Tech Stack

```
Frontend   →  React 18 + Vite 8
Animation  →  Framer Motion 11
3D         →  Spline (@splinetool/react-spline)
Styling    →  Tailwind CSS v4 (Vanilla CSS tokens)
Icons      →  Lucide React
Language   →  TypeScript
Hosting    →  Vercel
Repo       →  GitHub (ShreyasVavley/profile)
```

---

## ✦ Architecture

```
src/
├── App.tsx                  # Root scroll-driven narrative layout
├── main.tsx                 # React DOM entry point
├── index.css                # Global design tokens + glassmorphism utilities
└── components/
    ├── SplineScene.tsx      # 3D scene loader with error boundary
    ├── Terminal.tsx         # Interactive Vavley-OS terminal emulator
    ├── GlassCard.tsx        # Glassmorphic project cards
    ├── TiltCard.tsx         # 3D tilt-on-hover project feature card
    ├── ObsidianToggle.tsx   # Animated mode toggle (Analytics ↔ Security)
    └── SpotlightButton.tsx  # Magnetic spotlight CTA button
```

---

## ✦ Running Locally

```bash
# Clone the repository
git clone https://github.com/ShreyasVavley/profile.git
cd profile

# Install dependencies
npm install

# Start the Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✦ Building for Production

```bash
npm run build
```

Output lands in `/dist` — ready to drag-and-drop deploy anywhere.

---

## ✦ Design System

The portfolio uses a custom **Midnight Obsidian** design language:

- **Background**: `#050505` — near-pure black obsidian
- **Accent Blue**: `#3b82f6` — electric neural blue
- **Accent Violet**: `#8b5cf6` — deep intelligence violet
- **Typography**: System-native sans-serif with tight tracking
- **Effects**: Glassmorphism, noise overlay, dynamic radial gradients, blur depth layers

---

## ✦ Key Features

- ♾️ **Scroll-driven storytelling** — phases unlock as you scroll through the narrative
- 🌐 **Interactive 3D** — Spline scene scales and drifts with scroll velocity
- 💻 **Live Terminal** — Vavley-OS terminal emulator with real command responses
- 🎛️ **Dynamic Mode Toggle** — switches between Analytics and Security display states
- 🛡️ **Resilient 3D** — Error boundary ensures the page never breaks if Spline fails to load
- 🚀 **Vite-powered** — Lightning fast HMR, esbuild compiler, sub-3s cold builds

---

## ✦ Deployment

Hosted on **Vercel** with automatic deployments on every push to `main`.

| Platform | URL |
|---|---|
| Vercel | [profile-eosin-six.vercel.app](https://profile-eosin-six.vercel.app/) |
| Netlify | [shrprofile.netlify.app](https://shrprofile.netlify.app/) |
| GitHub | [github.com/ShreyasVavley/profile](https://github.com/ShreyasVavley/profile) |

---

## ✦ License

Personal portfolio — all rights reserved © 2026 Shreyas Vavley.
