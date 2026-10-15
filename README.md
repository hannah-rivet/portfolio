# Portfolio site

Plain HTML/CSS/JS. No build step. Works on GitHub Pages as-is.

## Publish on GitHub Pages
1. Create a new GitHub repo (e.g. `portfolio`, public).
2. Upload everything inside this `site/` folder to the repo root (index.html, project.html, projects.js, site.js, style.css, images/, .nojekyll).
3. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.
   (Name the repo `<your-username>.github.io` to get `https://<your-username>.github.io/` instead.)

## Add a finished project
Open `projects.js`, find the project, and change:
- `status: "in-progress"` to `"complete"`
- `finding` to `{ num: "...", label: "..." }`
- `links` to `[ { label: "Open the StoryMap", url: "https://..." } ]`
- `images` to your screenshots (copy the files into `images/` first)
- `body` to your write-up paragraphs

## Add a brand-new project
Copy any block in `projects.js`, give it a unique `slug`, fill in the fields. The card and project page appear automatically.

## Fill in GitHub / LinkedIn
Set `github` and `linkedin` at the top of `projects.js`. Empty ones are hidden.
