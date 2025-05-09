/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'slow-pulse': 'pulse 5s ease-in-out infinite'
			}
		}
	},

	plugins: []
};
