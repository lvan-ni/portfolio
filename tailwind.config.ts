import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "62": "62px", // Mobile Header Large
        "42": "42px", // Mobile Header Medium
        "18": "18px", // Mobile Body Large | LOGO
        "14": "14px", // Mobile Body Medium
        "84": "84px", // Desktop Header Large
        "58": "58px", // Desktop Header Medium
        "28": "28px", // Desktop Body Large | LOGO
        "20": "20px", // Desktop Body Medium
      },
      spacing: {
        xs: "20px",
        sm: "40px",
        md: "60px",
        lg: "70px",
        Dxs: "80px",
        Dsm: "100px",
        Dmd: "120px",
        Dlg: "160px",
        Dxl: "200px",
      },
      colors: {
        "primary-teal": "#004442",
        "user-blue": "#2563eb",
        "core-fog": "#fafafa",
        "core-stone": "#f5f5f4",
        "core-charcoal": "#262626",
        "core-jet": "#0a0a0a",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-logo": {
          fontSize: "18px",
          fontWeight: "700", // Bold
        },
        ".text-header-lg": {
          fontSize: "62px",
          fontWeight: "700", // Bold
        },
        ".text-header-md": {
          fontSize: "42px",
          fontWeight: "700", // Bold
        },
        ".text-body-lg": {
          fontSize: "18px",
          fontWeight: "500", // Medium
        },
        ".text-body-md": {
          fontSize: "14px",
          fontWeight: "500", // Medium
        },
        ".text-logo-D": {
          fontSize: "28px",
          fontWeight: "700", // Bold
        },
        ".text-header-lg-D": {
          fontSize: "84px",
          fontWeight: "700", // Bold
        },
        ".text-header-md-D": {
          fontSize: "58px",
          fontWeight: "700", // Bold
        },
        ".text-body-lg-D": {
          fontSize: "28px",
          fontWeight: "500", // Medium
        },
        ".text-body-md-D": {
          fontSize: "20px",
          fontWeight: "500", // Medium
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
