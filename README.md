![Pages](https://github.com/generalplanet54-byte/Ubani/actions/workflows/gh-pages.yml/badge.svg)

Ubani

## Deployment (GitHub Pages)

This project is configured to publish the built site to the `docs/` folder so it can be served by GitHub Pages from the `main` branch. A GitHub Actions workflow builds and deploys the `docs/` folder automatically on push to `main`.

How it works:

- `vite.config.ts` computes the correct `base` for GitHub Pages during CI and outputs the build to `docs/`.
- The GitHub Actions workflow (`.github/workflows/gh-pages.yml`) builds the site and deploys it to Pages.

To deploy manually:

```bash
# build into docs/
npm ci
REPO_NAME="/Ubani/" npm run build
# commit and push the generated docs/
git add docs && git commit -m "chore: build site" && git push
```

After pushing, go to your repository Settings → Pages and ensure GitHub Pages is set to "Deploy from a branch" and the branch `main` with the `/docs` folder. The site will be available at:

https://<your-username>.github.io/Ubani/
