# Migration Guide

## Moving from Old Portfolio to New Next.js Portfolio

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Public Assets

Ensure your images and resume are in the `public` folder:

```
public/
  ├── ZeldaPicture.png
  ├── Afterstep.png
  └── Kyle_Cornell_Resume.pdf
```

If they're currently in the root directory, move them:

```bash
mkdir -p public
mv ZeldaPicture.png Afterstep.png Kyle_Cornell_Resume.pdf public/
```

### Step 3: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 to preview your new portfolio.

### Step 4: Build for Production

```bash
npm run build
```

This creates an `out` directory with static files.

### Step 5: Deploy

#### Option A: GitHub Actions (Recommended)

The `.github/workflows/deploy.yml` file is already configured. Just:

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Push to `main` branch - deployment happens automatically

#### Option B: Manual Deployment

```bash
npm run build
touch out/.nojekyll
# Then manually push the 'out' directory to gh-pages branch
```

### Step 6: Clean Up (Optional)

After confirming the new site works, you can remove:
- Old `index.html`
- Old `assets/` folder (if not needed)
- Old template files

**Note:** Keep your images and resume PDF in the `public` folder!
