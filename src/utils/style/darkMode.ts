import { css, FlattenSimpleInterpolation } from "styled-components";

function darkMode(style: FlattenSimpleInterpolation) {
  return css`
    @media (prefers-color-scheme: dark) {
      ${style}
    }
  `;
}
export function isDarkMode() {
  return (
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default darkMode;
