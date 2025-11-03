# My Portfolio

A customizable portfolio experience built with Next.js, Mantine, and Tailwind CSS. This repository contains the modernized version of the site that replaces the legacy Mantine-only build.

## Tech Stack

- **Framework:** [Next.js 12](https://nextjs.org/) with file-system routing and API routes
- **UI Layer:** [Mantine 5](https://mantine.dev/) for components and theming, enhanced with [Tailwind CSS](https://tailwindcss.com/) utilities
- **State Management:** [Recoil](https://recoiljs.org/) for layout state and [Zustand](https://zustand-demo.pmnd.rs/) for lightweight stores
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Tooling:** ESLint, Prettier, and SWC for DX and performance

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn 1 (Classic) or npm 8+

### Environment Variables

1. Duplicate `.env.example` to `.env.local` and adjust values for your setup.
2. For staging, copy `.env.staging` to `.env.local` or load it with `env $(cat .env.staging) yarn dev`.
3. Required keys:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_DEPLOYMENT_ENV` (`development`, `staging`, or `production`)
   - `NEXT_PUBLIC_PRIMARY_COLOR` (Mantine color token)
   - `NEXT_PUBLIC_DEFAULT_COLOR_SCHEME` (`light` or `dark`)
   - Optional analytics and CMS endpoints

Environment variables are surfaced via `config/siteConfig.js` and injected at build time through `next.config.js`.

### Installation

```bash
yarn install
```

### Development Workflow

```bash
yarn dev
```

- Runs the Next.js development server on [http://localhost:3000](http://localhost:3000).
- Hot reloads components and styles as you edit files.
- Uses the values from `.env.local` to configure theming and integration endpoints.

### Staging Workflow

Preview deployments on Vercel or locally:

```bash
env $(cat .env.staging | xargs) yarn dev # local staging preview
yarn build && NEXT_PUBLIC_DEPLOYMENT_ENV=staging NEXT_PUBLIC_SITE_URL=https://portfolio-staging.example.com next start -p 3001
```

- Non-production builds render a banner so reviewers know they are viewing staging.
- Customize staging defaults in `.env.staging` or the `preview` section of `vercel.json`.

### Production Build

```bash
yarn build
yarn start
```

The production build uses values injected through Vercel environment variables (see `vercel.json`).

## Deployment

This project targets [Vercel](https://vercel.com/):

- `vercel.json` defines the build command, default environment variables, and separates production vs. preview settings.
- Set `main` as the production branch. Any other branch deploys as a staging/preview environment with `NEXT_PUBLIC_DEPLOYMENT_ENV=staging`.
- Use `vercel env pull` to sync remote variables locally.

## Customization

- Update colors and layout tokens in `config/siteConfig.js` and `styles/colors.js`.
- Mantine theming is centralized in `pages/_app.js`. Adjust breakpoints, global styles, and color palettes there.
- Data-driven sections live inside the `data/` directory; modify JSON/JS exports to update content without touching components.

## Documentation

- [`CHANGELOG.md`](./CHANGELOG.md) tracks notable updates to the project.
- [`docs/MIGRATION.md`](./docs/MIGRATION.md) highlights differences between this codebase and the legacy Mantine build.

## Contributing

1. Fork the repository and create a feature branch.
2. Update or add tests where relevant.
3. Run `yarn lint` before opening a pull request.
4. Document user-facing changes in `CHANGELOG.md`.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
