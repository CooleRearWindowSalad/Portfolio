# Rosa's Portfolio

Personal portfolio website about me, a Computer Science student and software developer. The site introduces me, highlights my skills, and showcases selected projects.

**Live site:** [portfolio-eight-theta-d0b2x1unzo.vercel.app](https://portfolio-eight-theta-d0b2x1unzo.vercel.app/)

## Features

- Home page with an introduction and quick links
- About page with personal and professional information
- Projects page with skills grouped by category
- Responsive layout with reusable navigation, footer, and button components
- Client-side routing with React Router
- Portfolio content stored separately (in `src/data/portfolio.json`)

## Tech stack

- React 18
- React Router
- Vite
- JavaScript (ES modules)
- CSS

## Getting started

### Prerequisites

- Node.js and npm

### Install and run locally

The application lives in the `react-folder` directory:

```bash
cd react-folder
npm install
npm run dev
```

Open the local URL printed by Vite, usually
`http://localhost:5173`.

### Production build

```bash
cd react-folder
npm run build
npm run preview
```

The production files are generated in `react-folder/dist`.

## Updating portfolio content

Edit `react-folder/src/data/portfolio.json` to update the skills and project shown on the Projects page. Update images in
`react-folder/src/images` and the relevant page component when changing the profile imagery or page-specific content.

## Project structure

```text
react-folder/
├── src/
│   ├── app/            # Providers, routing, and page layout
│   ├── components/     # Shared UI and layout components
│   ├── data/           # Portfolio content
│   ├── features/       # Home, About, Contact, and Projects pages
│   ├── images/         # Local images
│   └── styles/         # Global and page-specific styles
├── index.html
├── package.json
└── vite.config.js
```

## Available scripts

Run these commands from `react-folder`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |