const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['QuicksandVariable', ...defaultTheme.fontFamily.sans]
			},
			backgroundColor: colors.slate[500]
		}
	},
	plugins: []
};
