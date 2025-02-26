const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	// Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
}