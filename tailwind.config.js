/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					purple: "hsl(259, 100%, 65%)",
					lightRed: "hsl(0, 100%, 67%)",
				},
				neutral: {
					offWhite: "hsl(0, 0%, 94%)",
					lightGrey: "hsl(0, 0%, 86%)",
					smokeyGrey: "hsl(0, 1%, 44%)",
					offBlack: "hsl(0, 0%, 8%)",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
