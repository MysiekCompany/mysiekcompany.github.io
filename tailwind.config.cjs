/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'siedziba': "url('/src/img/siedziba.png')"
			},
			zIndex: {
				'1': 1
			},
			colors: {
				'youtube': '#ff0000',
				'excel': '#10793f',
				'charcoal': '#36454f',
				'paper': '#e0c9a6',
				'platinum': '#e5e4e2',
				'discord': {
					DEFAULT: '#7289da',
					'dark': '#6c82cf',
					'darker': '#677bc4'
				},
				'trucksbook': {
					DEFAULT: '#2f60a3',
					'dark': '#2d5b9b',
					'darker': '#2a5693'
				},
				'trucky': {
					DEFAULT: '#a51745',
					'dark': '#9d1642',
					'darker': '#95153e'
				},
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
