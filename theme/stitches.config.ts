import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      yellow100: "rgba(244, 208, 111, 0.2);",
      yellow: "#F4D06F",
      red: "#E98587",
      gray400: "#9CA3AF",
      slate400: "#94A3B8",
    },
    fonts: {
      header: `"Rotundo", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      body: `"Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    },
  },
  media: {
    bp1: "(min-width: 414px)",
    bp2: "(min-width: 956px)",
    bp3: "(min-width: 2588px)",
  },
  utils: {
    visuallyHidden: () => ({
      position: "absolute",
      left: "-10000px",
      top: "auto",
      width: "1px",
      height: "1px",
      overflow: "hidden",
    }),
  },
});
