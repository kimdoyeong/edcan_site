import { css, FlattenSimpleInterpolation } from "styled-components";

function darkMode(style: FlattenSimpleInterpolation) {
  return css`
    @media (prefers-color-scheme: dark) {
      ${style}
    }
  `;
}

export default darkMode;
