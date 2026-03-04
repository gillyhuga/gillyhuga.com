import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SOURCE_IMAGE = resolve(
    __dirname,
    "/Users/gilly/.gemini/antigravity/brain/b794cb87-0d45-494e-ab49-f4b462035f83/media__1772638340902.png"
);

const OUTPUT_DIR = resolve(__dirname, "public");

const sizes = [
    { name: "icon-72x72.png", size: 72 },
    { name: "icon-96x96.png", size: 96 },
    { name: "icon-128x128.png", size: 128 },
    { name: "icon-144x144.png", size: 144 },
    { name: "icon-152x152.png", size: 152 },
    { name: "icon-192x192.png", size: 192 },
    { name: "icon-384x384.png", size: 384 },
    { name: "icon-512x512.png", size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
];

async function generateIcons() {
    console.log("Generating icons from:", SOURCE_IMAGE);

    for (const { name, size } of sizes) {
        const outputPath = resolve(OUTPUT_DIR, name);
        await sharp(SOURCE_IMAGE)
            .resize(size, size, {
                fit: "contain",
                background: { r: 0, g: 0, b: 0, alpha: 0 },
            })
            .png()
            .toFile(outputPath);
        console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // Generate favicon.ico (32x32 and 16x16 multi-size)
    const faviconPath = resolve(__dirname, "src/app/favicon.ico");
    await sharp(SOURCE_IMAGE)
        .resize(32, 32, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(resolve(OUTPUT_DIR, "favicon-32x32.png"));

    // Use sharp to create ICO format via PNG (Next.js uses favicon.ico directly)
    await sharp(SOURCE_IMAGE)
        .resize(32, 32, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .toFile(faviconPath);

    console.log("✓ Generated favicon.ico");
    console.log("✅ All icons generated successfully!");
}

generateIcons().catch(console.error);
