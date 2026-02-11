# Quick Setup Guide

## 🚀 Getting Started

### 1. Move Assets to Public Folder

```bash
mkdir -p public
mv ZeldaPicture.png Afterstep.png Kyle_Cornell_Resume.pdf ZeldaGolden.zip public/
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production

```bash
npm run build
```

The static files will be in the `out` directory.

## 📁 Project Structure

```
├── app/              # Next.js App Router
│   ├── page.tsx      # Main page (Bento grid)
│   └── layout.tsx    # Root layout
├── components/       # React components
├── lib/              # Data and utilities
│   └── data.ts      # Your portfolio content
└── public/           # Static assets (images, PDFs)
```

## 🎨 Customization

Edit `lib/data.ts` to update:
- Your bio and contact info
- Projects and descriptions
- Tech stack
- Experience timeline

## 🚢 Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy when you push to `main`.

Make sure to:
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push your code to `main` branch
