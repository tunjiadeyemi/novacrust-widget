# Novacrust Widget by tunji adeyemi

## Overview

This project is a React + Vite embeddable widget for crypto/fiat conversion, designed to be easily integrated into any website via iframe or JS snippet. It is highly customizable via URL query parameters.

## Features

- Responsive, customizable widget
- Dynamic width and height via URL query params
- Animated tab navigation
- Form validation and user feedback
- Reusable, accessible UI components
- Ready for embedding in any site

## Embedding the Widget

### 1. Via iframe (recommended)

```html
<iframe
  src="https://tunny-novacrust.netlify.app/crypto-to-cash"
  width="400"
  height="500"
  allowtransparency="true"
></iframe>
```

- You can set `width` and `height` in the URL or as iframe attributes.
- The widget will use the provided values or fall back to its default size.

## Routing

- The default route is `/crypto-to-cash`. Navigating to `/` will redirect to `/crypto-to-cash` (this is a tempoary fallback till a homepage is added).
- Other routes: `/cash-to-crypto`, `/crypto-to-fiat-loan`.

## Customization

- You can pass `width` and/or `height` as query params to control the widget size.
- More customization (theme, color, etc.) can be added as needed.

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/novacrust.git
   cd novacrust
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Preview the production build:**

   ```sh
   npm run preview
   ```

6. **Deploy** to your preferred platform (Vercel, Netlify, etc.).

## Assumptions & Trade-offs

- The widget is designed to be embedded via iframe for maximum compatibility and security.
- Customization is currently limited to width and height via query params; theming and advanced options can be added as needed.
- The widget uses static rates for crypto/fiat conversion as a placeholder.
- The UI is built with Tailwind CSS and React, assuming modern browser support.
- No authentication or sensitive user data is handled by the widget.
- Accessibility and keyboard navigation are considered, but further improvements may be needed for full WCAG compliance.

## Development

- Edit components in `src/components` to customize the widget.
- Use the provided validation and UI patterns for consistency.

---
