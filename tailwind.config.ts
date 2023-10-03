/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "auto-skills": "repeat(auto-fill, minmax(90px, 1fr))",
      },
      fontFamily: {
        main: ['"Open Sans"', "sans-serif"],
        brand: ["Augestina", "ui-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navbar: {
          scroll: "var(--navbar-scroll)",
        },
        twitter: {
          DEFAULT: "var(--twitter)",
          hover: "var(--twitter-hover)",
          foreground: "var(--twitter-foreground)",
        },
        linkedin: {
          DEFAULT: "var(--linkedin)",
          hover: "var(--linkedin-hover)",
          foreground: "var(--linkedin-foreground)",
        },
        github: {
          DEFAULT: "var(--github)",
          hover: "var(--github-hover)",
          foreground: "var(--github-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "3xs": "0.625rem",
        "2xs": "0.75rem",
        xs: "0.85rem",
      },
      lineHeight: {
        "2": "0.625rem",
      },
      transitionDuration: {
        fade: "1700ms",
      },
      boxShadow: {
        "topbar-hover": "0 1px 10px rgba(130, 130, 134, 0.1)",
      },
      spacing: {
        "main-layout": "2rem",
        "section-spacing": "2rem",
        "inner-section-spacing": "1.5rem",
        "navbar-height": "68px",
        "fade-translate-mobile": "100%",
        "fade-translate-desktop": "100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
