# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
D:\Oxygen\
├── app/
│   ├── layout.tsx          # Root layout with fonts (Oswald & Inter)
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── Navbar.tsx          # Sticky navbar with glassmorphism
│   ├── HeroSection.tsx     # Hero with parallax & animations
│   ├── ClassSchedule.tsx   # Interactive schedule with filtering
│   ├── TrainersSection.tsx # Trainers showcase
│   ├── PricingSection.tsx  # 3-tier pricing cards
│   └── RevealOnScroll.tsx  # Reusable scroll reveal wrapper
├── data/
│   └── scheduleData.ts     # Typed schedule data
└── package.json
```

## Component Details

### Phase 1: Navbar
- ✅ Sticky positioning
- ✅ Glassmorphism effect (blur background)
- ✅ Desktop: Horizontal links
- ✅ Mobile: Hamburger menu with slide-out drawer
- ✅ Smooth scroll navigation

### Phase 2: Hero Section
- ✅ Dark gym background image (Unsplash)
- ✅ Dark overlay gradient
- ✅ Headline: "FORGE YOUR LEGACY."
- ✅ Subheadline with description
- ✅ Primary CTA: "Start Free Trial" (accent color)
- ✅ Secondary CTA: "View Classes" (outlined)
- ✅ Staggered fade-in animations
- ✅ Parallax effect on background

### Phase 3: Class Schedule
- ✅ Typed JSON data structure
- ✅ CSS Grid layout (not HTML table)
- ✅ Day filter tabs (Monday-Sunday)
- ✅ Animated card shuffling with AnimatePresence
- ✅ Clean filtering logic

### Phase 4: Pricing Cards
- ✅ 3 Tiers: Drop-In, Monthly Standard, Yearly Pro
- ✅ Hover effects (scale + border color change)
- ✅ "Most Popular" badge on Yearly Pro
- ✅ Slightly larger/highlighted default state
- ✅ Dummy Stripe URLs
- ✅ Screen reader accessible prices

### Phase 5: RevealOnScroll
- ✅ Reusable wrapper component
- ✅ Framer Motion viewport detection
- ✅ Fade in + slide up animation
- ✅ -100px viewport margin
- ✅ Applied to all major sections

## Design System

- **Background**: `#0f0f0f` (dark-bg)
- **Text**: `#f3f4f6` (dark-text)
- **Accent**: `#ccff00` (accent-green) or `#00d4ff` (accent-blue)
- **Typography**: Oswald (headings), Inter (body)
- **Theme**: Dark mode, high energy, premium

## Customization

### Change Accent Color
Edit `tailwind.config.js`:
```js
accent: {
  green: '#ccff00',  // Change this
  blue: '#00d4ff',
}
```

### Add More Schedule Data
Edit `data/scheduleData.ts`:
```ts
{ id: '40', time: '10:00', classType: 'New Class', trainer: 'Trainer Name', day: 'Monday' }
```

### Modify Pricing
Edit `components/PricingSection.tsx` - update the `pricingTiers` array.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All images use Unsplash placeholders
- Stripe URLs are dummy links (replace with real ones)
- Mobile-first responsive design
- Full accessibility support (ARIA labels, semantic HTML)
- Smooth scroll behavior enabled globally

