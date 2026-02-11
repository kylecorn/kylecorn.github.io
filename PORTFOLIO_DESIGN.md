# Portfolio Design Documentation

## 🎯 Design Philosophy

This portfolio is built with an "Engineered" aesthetic, inspired by Linear.app and Vercel. It prioritizes:

- **Minimalism**: Clean, uncluttered interface
- **Dark Mode First**: OLED black (#0a0a0a) background
- **Performance**: Static export, optimized assets
- **Developer-Focused**: Monospace fonts for headers, technical feel

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` (OLED Black)
- **Borders**: `#333333` (Border Gray)
- **Gradients**: Cyan (#06b6d4) to Purple (#8b5cf6) - only on hover/key actions
- **Text**: White/Gray scale with cyan/purple accents

### Typography
- **Headers**: JetBrains Mono (Monospace)
- **Body**: Inter (Sans-serif)
- **Tags/Accents**: JetBrains Mono

### Visual Elements
- **1px borders** throughout
- **Glassmorphism**: `backdrop-blur-xl` with `bg-white/5`
- **Subtle noise texture** in background
- **Hover glows**: Cyan/purple gradients on interactive elements

## 📐 Layout: Bento Grid

The portfolio uses a responsive masonry grid:

```
┌─────────────┬─────────────┐
│    Hero     │  Tech Stack │
│   (6 cols)  │   (6 cols)  │
├─────────────┴─────────────┤
│      Project 1 (6 cols)    │
├────────────────────────────┤
│      Project 2 (6 cols)    │
├─────────────┬─────────────┤
│  Timeline   │   Contact   │
│  (6 cols)   │   (6 cols)  │
└─────────────┴─────────────┘
```

On mobile, all cards stack vertically (col-span-full).

## 🧩 Components

### Hero
- Large monospace name
- Title and location
- Brief description
- Scroll indicator

### Tech Stack
- All technologies displayed as tags
- Categorized: Languages, Frameworks, Tools
- Hover effects with cyan borders

### Project Cards
- Repository-style design
- Image preview with hover scale
- Tech tags
- Action buttons (Play/Download/Repo)
- Hover glow effect

### Timeline
- Vertical timeline with dots
- Experience entries
- Calendar icons

### Contact
- Email, Phone, LinkedIn
- Resume download/view toggle
- Embedded PDF viewer

## ✨ Animations

- **Staggered fade-ins** using Framer Motion
- **Hover transitions** on all interactive elements
- **Smooth scroll** indicators
- **Card glows** on hover

## 🚀 Performance

- Static export (no SSR)
- Optimized images (Next.js Image component)
- Minimal JavaScript bundle
- CSS-only animations where possible
