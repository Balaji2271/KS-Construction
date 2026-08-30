# KS Construction

Premium website for **KS Construction** — Building Dreams. Creating Spaces.

## Local development

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

This site is built for:

**https://balaji2271.github.io/KS-Construction/**

On every push to `main`, GitHub Actions builds the Vite app and deploys the `dist/` folder to GitHub Pages.

In the repo settings → **Pages**:
- Source must be **GitHub Actions** (not “Deploy from a branch”).

Local production check:

```bash
npm run build
npm run preview
```

## Replacing sample content

- Logo: `src/assets/images/logo/`
- Images: `src/assets/images/`
- Services: `src/data/services.js`
- Projects: `src/data/projects.js`
- Gallery: `src/data/gallery.js`
- Contact details: `src/data/site.js`

Project and gallery items marked as sample placeholders should be replaced with real KS Construction photography when available.
