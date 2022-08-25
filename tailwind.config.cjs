/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'siedziba': "url('/src/img/siedziba.png')"
			}
		},
	},
	plugins: [],
}
