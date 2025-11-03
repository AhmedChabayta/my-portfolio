# Migration Notes: Legacy Mantine Build → Next.js Portfolio

These notes outline the key differences between the original Mantine-only build and the current Next.js-based implementation, along with guidance for teams upgrading customizations.

## Architecture

| Area | Legacy Build | Current Build |
| --- | --- | --- |
| Rendering | Static HTML bundler with client-side routing | Next.js 12 with hybrid static/SSR rendering |
| State | Local React state sprinkled through components | Centralized layout state in Recoil and auxiliary Zustand stores |
| Styling | Mantine theme overrides within each component | Global Mantine theme defined in `pages/_app.js` with Tailwind utility helpers |
| Deployment | Manually managed hosting (Netlify / S3) | Vercel with automated previews and environment separation |

## Environment Configuration

- **New:** `.env.example` and `.env.staging` provide reproducible defaults; environment variables are consolidated in `config/siteConfig.js`.
- **New:** `NEXT_PUBLIC_DEPLOYMENT_ENV` toggles production vs. staging visuals and defaults. Legacy builds relied on ad-hoc flags.
- **New:** `vercel.json` seeds production and preview variables. Update the placeholders to match your domains and secrets.

## Theming & Customization

- Mantine theme tokens now flow through `siteConfig.primaryColor` and `siteConfig.defaultColorScheme`, enabling per-environment branding.
- Tailwind utilities augment Mantine components; ensure custom styles reference Tailwind classes defined in `styles/globals.css`.
- The staging banner is injected from `components/Layout/Layout.js` whenever `NEXT_PUBLIC_DEPLOYMENT_ENV` is not `production`.

## Data & Content

- Content modules live in `data/` and `data.js` rather than inline component definitions.
- If you customized content in the legacy build, port the relevant structures into the new data layer files.

## Deployment Workflow

1. Configure Vercel project and link repository.
2. Populate environment variables through the Vercel dashboard (`production` and `preview` scopes mirror `vercel.json`).
3. Push to `main` for production. Feature branches automatically deploy to staging with the banner enabled.
4. Use `vercel env pull` to sync remote secrets locally.

## Known Changes

- Legacy hotkeys or shortcuts tied to Mantine provider props may require updates; review the new `Layout` implementation for reference shortcuts.
- Default color palette leans on Tailwind-compatible hex values; adjust `styles/colors.js` to restore bespoke color ramps.

For additional questions or historical context, see the project `CHANGELOG.md` or reach out to the maintainers.
