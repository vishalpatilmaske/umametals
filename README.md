# umametal-website

Public marketing website for **UMA Metal Craft** — precision metal fabrication, industrial components, and engineering tools.

## Tech stack

- React 18 + Vite
- Tailwind CSS 4
- React Router
- Lucide React icons

## Prerequisites

- Node.js 18+
- [umametal-server](../umametal-server) running for blog and contact features

## Setup

```bash
npm install
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | API server URL (default `http://localhost:5050`) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port `5173` |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Development

```bash
npm run dev
```

Open http://localhost:5173

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Company overview |
| `/products` | Product catalog |
| `/products/*` | Product category pages |
| `/capabilities` | Manufacturing capabilities |
| `/facilities` | Facilities |
| `/calculators/*` | Engineering calculators |
| `/blog` | Blog listing |
| `/blog/:slug` | Blog article |
| `/contact` | Contact form |

## Calculators

- Metal weight
- Pipe weight
- Laser cutting cost
- Bend allowance
- Unit converter

## Project structure

```
src/
├── components/     # Layout, header, footer, sections
├── pages/          # Route pages and product/calculator views
├── data/           # Static content
├── hooks/          # Scroll reveal, page meta
├── lib/            # API client
├── styles/         # Component styles
├── App.jsx
└── main.jsx
```

## Production

```bash
npm run build
```

Deploy the `dist/` folder. Set `VITE_API_BASE_URL` to your production API URL before building.
