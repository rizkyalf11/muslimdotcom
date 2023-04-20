/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			arab: ['Noto Naskh Arabic', 'serif'],
			ayat: ['Scheherazade New', 'serif'],
		},
		screens: {
			'moM': '375px',
			'moL': '425px',
			'mlTtb': '614px',
			'tablt': '768px',
			'lptop': '1024px'
		}
	},
	plugins: [],
}

