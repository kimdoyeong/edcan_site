import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface BoxProps {
  bgColor?: string;
  flex?: boolean;
  center?: boolean;
  boxStyle?: FlattenSimpleInterpolation;
}
interface BoxComponentProps {
  tag?: string;
  className?: string;
  children?: React.ReactNode;
}

function BoxComponent({ tag, children, className }: BoxComponentProps) {
  const Tag: any = tag || "div";
  return <Tag className={className}>{children}</Tag>;
}

const Box = styled(BoxComponent)<BoxProps>`
  ${({ bgColor, flex, center, boxStyle }) => css`
    ${bgColor &&
      css`
        background: ${bgColor};
      `}
      ${flex &&
        css`
          display: flex;
        `}
      ${center &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      ${boxStyle && boxStyle}
  `}
`;

export default Box;
