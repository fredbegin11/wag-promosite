import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
