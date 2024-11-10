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
  			lg: 'var(--radius,0.5rem)',
  			md: 'calc(var(--radius) - 2px, 0.375rem)',
  			sm: 'calc(var(--radius) - 4px,0.125rem)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
