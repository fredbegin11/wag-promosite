import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        daggy: "url('/daggy.png')",
      },
      colors: {
        primary: "#3d6981",
        secondary: "#dec331",
        tertiary: "#afbebb",
      },
    },
  },
  plugins: [],
}
export default config
