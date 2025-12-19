# Pagina Web - Contreras y Asociados despacho juridico

This is a bilingual (Spanish/English) Astro 5.x landing page for a Mexican law firm. The site uses Tailwind CSS for styling and includes internationalization support with Spanish as the default locale.

## Development Commands

All commands should be run from the project root:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)
- `npm run lint` - Run ESLint on .astro files
- `npm run lint:fix` - Run ESLint with auto-fix on .astro files

## Architecture

**Framework**: Astro 5.x with TypeScript support, Tailwind CSS 4.x, and internationalization

**Internationalization**:
- Default locale: Spanish (`es`)
- Supported locales: English (`en`), Spanish (`es`)
- Routing uses `prefixDefaultLocale: true` so all routes are prefixed (e.g., `/es/`, `/en/`)
- Translations are managed in `src/i18n/ui.ts` with typed translation keys
- Language utilities in `src/i18n/utils.ts` for getting locale from URL and translation functions

**Key Directories**:
- `src/pages/[locale]/` - Localized pages using dynamic routing for internationalization
- `src/sections/` - Page sections (Hero, Services, About, Philosophy, Contact, Header, Footer)
- `src/components/` - Reusable components including ContactForm, LanguageSwitcher, WhatsappFlottingButton
- `src/layouts/` - Layout components (Layout.astro for base HTML structure)
- `src/assets/` - SVG assets including law firm logos and icons
- `src/i18n/` - Internationalization configuration and translations
- `src/styles/` - Global CSS styles
- `public/images/` - Static images (WebP format)

**Component Architecture**:
- Section-based layout: Header, Hero, Services, About, Philosophy, Contact, Footer
- Internationalized content using translation keys and the `t()` function
- WhatsApp floating button for client contact
- Language switcher component for locale selection
- Responsive design with Tailwind CSS
- Static site generation with `getStaticPaths()` for all supported locales

**Styling**:
- Tailwind CSS 4.x integrated via Vite plugin
- Component-scoped styles using `<style>` blocks in .astro files
- Global styles in `src/styles/global.css`

**Content Structure**:
- Legal services: Criminal Law, Civil Law, Family Law, Corporate Law
- Company philosophy: Mission, Vision, Values (Integrity, Excellence, Commitment, Respect)
- Contact form and WhatsApp integration for client inquiries


## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
