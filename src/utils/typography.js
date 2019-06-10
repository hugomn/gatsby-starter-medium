import Typography from "typography"

const typography = new Typography({
  baseFontSize: "21px",
  baseLineHeight: 1.6,
  headerFontFamily: [
    "medium-content-sans-serif-font",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["medium-content-serif-font", "serif"],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
