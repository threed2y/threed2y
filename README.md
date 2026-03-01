# Rupesh Pandey — Portfolio

Personal portfolio site built with **React + Vite + Tailwind CSS**, deployable to GitHub Pages via GitHub Actions.

## 🚀 Quick Start

```bash
# 1. Clone & install
git clone https://github.com/threed2y/threed2y
cd threed2y
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── data.js              ← Edit THIS to update all content
├── App.jsx              ← Root layout
├── index.css            ← Global styles
└── components/
    ├── Header.jsx
    ├── Hero.jsx
    ├── Projects.jsx
    ├── ProjectCard.jsx
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## 🌐 Deploy to GitHub Pages

### One-time setup:
1. Push this repo to GitHub as `rupesh-portfolio`
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` — the workflow auto-deploys

### Live URL:
`https://threed2y.github.io/threed2y/`

> If you rename the repo, update `vite.config.js` base and `package.json` homepage.

## ✏️ Customization

All content lives in `src/data.js`. Edit it — no code changes needed.
