# PWA Setup Documentation

This project has been configured as a Progressive Web App (PWA) using `next-pwa`.

## Features Implemented

### 1. PWA Configuration
- **Package**: `next-pwa` installed as a dependency
- **Configuration**: Located in `next.config.mjs`
- **Service Worker**: Automatically generated during production build
- **Development Mode**: PWA is disabled in development for better debugging

### 2. Web App Manifest
- **File**: `public/manifest.json`
- **Properties**:
  - App name: "Gilly Huga Anargya"
  - Short name: "Gilly Huga"
  - Theme color: #000000 (black)
  - Background color: #000000 (black)
  - Display mode: standalone
  - Start URL: /

### 3. PWA Icons
Generated icons in multiple sizes for various devices:
- `icon-192x192.png` - Small icon for mobile devices
- `icon-256x256.png` - Medium icon
- `icon-384x384.png` - Large icon for tablets
- `icon-512x512.png` - Extra large icon for high-resolution displays

All icons support both maskable and any purpose.

### 4. Meta Tags
Added in `src/app/layout.tsx`:
- Manifest link
- Theme color
- Viewport settings
- Apple Web App meta tags for iOS devices

## How to Test

### Testing in Production
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Open the app in a browser
4. Look for the "Install App" prompt or "Add to Home Screen" option

### Testing Service Worker
1. Open DevTools (F12)
2. Go to the "Application" tab
3. Check "Service Workers" section - you should see a registered service worker
4. Check "Manifest" section - verify manifest.json is loaded correctly

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run an audit with "Progressive Web App" category
4. Should achieve a high PWA score

## Files Modified

- `next.config.mjs` - PWA configuration
- `package.json` - Added next-pwa dependency
- `src/app/layout.tsx` - PWA metadata
- `public/manifest.json` - Web app manifest
- `public/icon-*.png` - PWA icons
- `.gitignore` - Exclude generated service worker files

## Production Behavior

When the app is built for production:
- Service worker is automatically generated in `public/sw.js`
- Workbox strategies are applied for caching
- App becomes installable on supported devices
- Offline functionality is enabled

## Notes

- Service worker files (`sw.js`, `workbox-*.js`) are automatically generated during production build
- These files are excluded from version control via `.gitignore`
- PWA is disabled in development mode for easier debugging
- The app will prompt users to install on supported browsers
