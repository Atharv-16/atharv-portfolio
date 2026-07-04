export const CONFIG = {
  site: {
    url: "https://atharv-16.github.io/atharv-portfolio",
    locale: "en_US",
    twitterHandle: "",
  },

  seo: {
    titleTemplate: "%n",
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  typography: {
    baseFontSize: 100,
  },

  blog: {
    postsPerPage: 10,
  },

  theme: {
    radius: "0.75rem",

    light: {
      background: "oklch(0.985 0.005 160)",
      foreground: "oklch(0.18 0.02 200)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.02 200)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.18 0.02 200)",
      primary: "oklch(0.45 0.12 165)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.96 0.01 160)",
      secondaryForeground: "oklch(0.25 0.03 200)",
      muted: "oklch(0.96 0.01 160)",
      mutedForeground: "oklch(0.5 0.02 200)",
      accent: "oklch(0.92 0.04 165)",
      accentForeground: "oklch(0.25 0.03 200)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.9 0.01 160)",
      input: "oklch(0.9 0.01 160)",
      ring: "oklch(0.55 0.12 165)",
    },

    dark: {
      background: "oklch(0.14 0.02 210)",
      foreground: "oklch(0.96 0.01 160)",
      card: "oklch(0.18 0.025 210)",
      cardForeground: "oklch(0.96 0.01 160)",
      popover: "oklch(0.18 0.025 210)",
      popoverForeground: "oklch(0.96 0.01 160)",
      primary: "oklch(0.78 0.14 155)",
      primaryForeground: "oklch(0.14 0.02 210)",
      secondary: "oklch(0.22 0.03 210)",
      secondaryForeground: "oklch(0.96 0.01 160)",
      muted: "oklch(0.22 0.03 210)",
      mutedForeground: "oklch(0.68 0.03 200)",
      accent: "oklch(0.24 0.04 200)",
      accentForeground: "oklch(0.96 0.01 160)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 12%)",
      ring: "oklch(0.55 0.12 165)",
    },
  },
} as const;
