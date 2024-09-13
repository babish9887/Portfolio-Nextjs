import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
            slideDown: {
              '0%': { transform: 'translateY(-100%)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
          },
          animation: {
            slideDown: 'slideDown 0.3s ease-out',
          },
    },
  },
  plugins: [],
};
export default config;
