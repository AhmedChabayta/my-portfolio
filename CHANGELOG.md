# Changelog

All notable changes to this project will be documented here. The format roughly follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-04-27
### Added
- Introduced environment-driven theming via `config/siteConfig.js`.
- Added Vercel deployment configuration with explicit staging and production environments.
- Documented environment setup, workflows, and customization options in the README.
- Created `.env.example` and `.env.staging` templates for local and preview deployments.
- Implemented non-production banner to highlight staging previews inside the layout.
- Added migration notes describing differences from the legacy Mantine build.

### Changed
- Updated `pages/_app.js` to centralize Mantine theme configuration and respect environment variables.
- Enhanced layout to surface environment status and spacing adjustments.

### Removed
- Legacy placeholder README content.
