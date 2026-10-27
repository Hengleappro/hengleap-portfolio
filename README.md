# Hengleap Portfolio

A personal portfolio built with Nuxt, Vue single-file components, and responsive CSS.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Cloudflare Pages

This portfolio is a static site and can be deployed to Cloudflare Pages:

- Build command: `npm run generate`
- Build output directory: `.output/public`
- Node.js version: use Node.js 22.21 or newer (or Node.js 24.11 or newer)

The portfolio content is kept in `app/data/portfolio.ts`. Add project screenshots under `public/images/` and update each project's screenshot reference when the real images are ready. Replace the missing project URLs and LinkedIn status in the same data file before publishing.

## Personalizing the site

- Edit your name, contact details, education, skills, and projects in `app/data/portfolio.ts`.
- Reusable page components are in `app/components/`.
- Global colors, typography, and responsive styles are in `app/assets/css/main.css`.

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for other hosting options.
