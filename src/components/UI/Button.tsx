import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import darkMode from "../../utils/style/darkMode";

const style = css`
  text-decoration: none;
  color: black;
  background: #f1f3f5;
  padding: 0.75em 1.25em;
  font-size: 1rem;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #f1f3f5;
  transition: all 0.5s;
  :hover {
    background: #455a64;
    color: white;
  }
  ${darkMode(css`
    background: #2b2b2b;
    color: white;
    box-shadow: 0 2px 5px #2b2b2b;
  `)}
`;

export const LinkButton = styled(Link)`
  ${style}
`;
export const AButton = styled.a`
  ${style}
`;

const Button = styled.button`
  ${style}
`;

export default Button;
