/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens:{
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily:{
		primary: 'var(--font-jetbrainsMono)'
	},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: "#00e187"
			}
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: '0.375rem',
  			sm: '0.125rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
