# hansellramos.github.io

Personal site of Hansel Ramos — Senior Software Engineer (PHP/Laravel, Vue, AI-assisted development).

Built with Vue 3 and Vite, deployed to GitHub Pages with GitHub Actions.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Editing content

All page content lives in `src/data/profile.js`. Photos go in `public/images/` and are referenced from that file (`profile.photo`, `interests[].photo`). A public CV (without phone number) can go in `public/cv/` and be linked through `profile.cvUrl`.

## Deploy

`.github/workflows/deploy.yml` builds on every push and pull request. It deploys to GitHub Pages only from `master`. In the repository settings, Pages must use **GitHub Actions** as its source.
