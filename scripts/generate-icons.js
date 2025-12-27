#!/usr/bin/env node

/**
 * Génère les icônes PWA avec Sharp
 * Crée des initiales "ST" sur fond vert émeraude
 */

const sharp = require("sharp");
const path = require("path");

const BG_COLOR = "#2a6f4f"; // Emerald from Tailwind
const SVG_ICON = (size) => `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${BG_COLOR}"/>
  <text x="${size / 2}" y="${size / 2}" font-size="${Math.round(size * 0.43)}" font-weight="bold" text-anchor="middle" dominant-baseline="central" fill="white" font-family="system-ui, -apple-system, sans-serif">ST</text>
</svg>`;

async function generateIcon(size) {
	const filename = path.join(__dirname, `../public/icon-${size}x${size}.png`);
	try {
		await sharp(Buffer.from(SVG_ICON(size)))
			.png()
			.toFile(filename);
		console.log(`✅ icon-${size}x${size}.png créé`);
	} catch (err) {
		console.error(`❌ Erreur pour ${size}x${size}:`, err.message);
		throw err;
	}
}

(async () => {
	try {
		await generateIcon(192);
		await generateIcon(512);
		console.log("🎉 Icônes PWA générées avec succès !");
	} catch (err) {
		console.error("❌ Erreur:", err.message);
		process.exit(1);
	}
})()
