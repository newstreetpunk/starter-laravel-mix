const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',

	purge: ['./dist/**/*.html'],

	darkMode: false, // or 'media' or 'class'

	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		colors: {
			mainBlue: '#002C5F',
			secondBlue: '#00AAD2',
			sand: '#E4DCD3',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
		},
		extend: {
			fontFamily: {
				sans: ['open-sans-st', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
