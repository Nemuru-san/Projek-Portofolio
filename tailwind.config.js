/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				roboto: ['Roboto Condensed', 'sans-serif'],
			},
			screens: {
				'2xl': '1320px',
			},
			backgroundImage: {
				pattern1: "url('img/pattern-1.svg')",
				pattern2: "url('img/pattern-5.svg')",
				loader: "url('img/loader.svg')",
			},
		},
	},
	plugins: [],
};
