/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				backgroundBody: '#dedddd',
				primary: '#F8F7F6',
				focus: '#848383',
				tertiary: '#856A7E',
				other: '#8C8389',
				text: '#25202B',
			},
		},
	},
	plugins: [],
};
