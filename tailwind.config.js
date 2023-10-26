/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			colors: {
				success: "#0f5132",
				error: "#842029",
			},
			backgroundColor: {
				success: "#d1e7dd",
				error: "#f8d7da",
			},
			borderColor: {
				success: "#badbcc",
				error: "#f5c2c7",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
