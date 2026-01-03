# Oxygen Gym Landing Page

A high-performance, single-page gym landing page built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom dark mode theme
- **Animations**: Framer Motion for smooth scroll reveals and interactions
- **Icons**: Lucide React for modern iconography
- **Responsive**: Mobile-first design that looks like a native app
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Performance**: Optimized images and smooth animations

## Design System

- **Theme**: Dark Mode aesthetic
- **Background**: #0f0f0f
- **Text**: #f3f4f6
- **Accent**: Neon Green (#ccff00) or Electric Blue (#00d4ff)
- **Typography**: Oswald/Inter for headings, Inter for body text

## Components

1. **Navbar**: Sticky navigation with glassmorphism effect and mobile hamburger menu
2. **Hero Section**: Full-screen hero with parallax background and staggered animations
3. **Class Schedule**: Interactive schedule with day filtering and CSS Grid layout
4. **Pricing Section**: Three-tier pricing cards with hover effects
5. **RevealOnScroll**: Reusable component for scroll-triggered animations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── HeroSection.tsx     # Hero section
│   ├── ClassSchedule.tsx   # Schedule component
│   ├── PricingSection.tsx  # Pricing cards
│   └── RevealOnScroll.tsx  # Scroll reveal wrapper
├── data/
│   └── scheduleData.ts     # Schedule data with types
└── public/                 # Static assets
```

## Usage

The `RevealOnScroll` component can wrap any section to add scroll-triggered animations:

```tsx
<RevealOnScroll>
  <YourSection />
</RevealOnScroll>
```

## Build

```bash
npm run build
npm start
```

## License

MIT

