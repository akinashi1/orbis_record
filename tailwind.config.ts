import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		animation: {
		"tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
		},
		keyframes: {
			"tracking-in-expand": {
				"0%": {
					"letter-spacing": "-.5em",
					opacity: "0"
				},
				"40%": {
					opacity: ".6"
				},
				to: {
					opacity: "1"
				}
			}
		}
    },



  },
  plugins: [],
};


export default config;


