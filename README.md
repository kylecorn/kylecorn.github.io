# Kyle Cornell - Portfolio

A modern, engineered portfolio built with Next.js, featuring a Bento grid layout and dark-mode first design.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (Static Export)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
```

This creates an `out` directory with static files ready for deployment.

### Deploy to GitHub Pages

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on push to `main`.

Alternatively, deploy manually:

```bash
npm run deploy
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page with Bento grid
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── TechStack.tsx   # Tech stack display
│   ├── ProjectCard.tsx # Project cards
│   ├── Timeline.tsx    # Experience timeline
│   └── Contact.tsx     # Contact & resume
└── lib/
    └── data.ts         # Portfolio data
```

## Customization

Edit `lib/data.ts` to update your bio, projects, tech stack, and experience.

## License

MIT
