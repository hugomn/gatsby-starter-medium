const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);
const scaleN = n => round(Math.pow(1.2, n), 3);
const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: "#FFFFFF",
  black: "#212529",
  red: "#FF0000",
  darkBlue: "#587B7F",
  blue: "#85B9BF",
  green: "#00ab6b",
  darkGreen: "#038252",
  lightGreen: "#00ab6b2e",
  gray: "#343a40",
  darkGray: "#1d2124",
  lightGray: "rgba(0, 0, 0, 0.44)",

  blackShades: ["#393E41"],
};

const theme = {
  scale,
  scaleN,
  colors,
  maxWidth: "71.25rem",
};

export default theme;
