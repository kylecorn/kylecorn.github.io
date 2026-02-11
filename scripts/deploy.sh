#!/bin/bash

# Build the Next.js app
npm run build

# Create .nojekyll file to prevent GitHub Pages from processing Jekyll
touch out/.nojekyll

# Copy public assets to out directory
if [ -d "public" ]; then
  cp -r public/* out/
fi

echo "Build complete! The 'out' directory is ready for deployment."
echo "To deploy to GitHub Pages, push the 'out' directory to the gh-pages branch."
