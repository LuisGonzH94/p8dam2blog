/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,css,js,jsx,md,mdx,svelte,ts,tsx,vue}'
		// Ajusta rutas a tu proyecto Astro
		// "./src/**/*.astro",
		// "./src/**/*.js",
		// "./src/**/*.jsx",
		// "./src/**/*.ts",
		// "./src/**/*.tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [
		// Si quieres plugins como @tailwindcss/typography
		[],
	],
}
