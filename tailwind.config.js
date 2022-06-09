const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./dist/**/*.html'],
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
			blue: colors.blue,
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			indigo: colors.indigo,
			red: colors.rose,
			green: colors.emerald,
			yellow: colors.amber,
			purple: colors.violet,
		},
		extend: {
			fontFamily: {
				sans: ['hyunday-st', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
