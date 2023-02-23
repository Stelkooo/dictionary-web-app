export const base = {
  breakpoints: {
    tablet: '768px',
    desktop: '1440px',
  },
  fonts: {
    'sans-serif': "'Inter', sans-serif",
    serif: "'Lora', serif",
    mono: "'Inconsolata', monospace",
  },
  fontSizes: {
    headingLarge: `${64 / 16}rem`,
    headingMedium: `${24 / 16}rem`,
    headingSmall: `${20 / 16}rem`,
    bodyMedium: `${18 / 16}rem`,
    bodySmall: `${14 / 16}rem`,
  },
  colours: {
    white: '#ffffff',
    black100: '#f4f4f4',
    black200: '#e9e9e9',
    black300: '#757575',
    black400: '#3a3a3a',
    black500: '#2d2d2d',
    black600: '#1f1f1f',
    black700: '#050505',
    warning: '#ff5252',
    purple: '#a445ed',
  },
};

export const light = {
  background: base.colours.white,
  searchBar: base.colours.black100,
  font: base.colours.black500,
};

export const dark = {
  background: base.colours.black700,
  searchBar: base.colours.black600,
  font: base.colours.white,
};
