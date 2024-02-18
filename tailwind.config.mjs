/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
				logo: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
