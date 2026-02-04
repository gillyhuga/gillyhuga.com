This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## PWA Support

This application is configured as a Progressive Web App (PWA) with the following features:

- **Installable**: Users can install the app on their devices
- **Offline Support**: Service worker caching for offline functionality
- **App-like Experience**: Runs in standalone mode without browser UI
- **Multiple Icon Sizes**: Optimized icons for various devices (72x72 to 512x512)
- **Apple Touch Icon**: Support for iOS devices

### PWA Configuration

The PWA is configured using [next-pwa](https://github.com/shadowwalker/next-pwa):
- Service worker is automatically generated during production builds
- Service worker is disabled in development mode
- Manifest file is located at `/public/manifest.json`
- Icons are located in the `/public` directory

### Testing PWA Locally

To test PWA features locally:

1. Build the production version:
   ```bash
   npm run build -- --webpack
   npm start
   ```

2. Open Chrome DevTools > Application > Service Workers to verify the service worker is registered
3. Check the Manifest tab to verify the web app manifest is loaded correctly
4. Use Lighthouse to audit PWA compliance

Note: PWA features only work in production builds, not in development mode.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
