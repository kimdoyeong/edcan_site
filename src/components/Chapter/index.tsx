import React from "react";
import styled from "styled-components";
import Box, { BoxProps } from "../Box";
interface ChapterProps {
  children: React.ReactNode;
}

function ChapterComponent({
  children,
  ...styleProps
}: ChapterProps & BoxProps) {
  return <Box {...styleProps}>{children}</Box>;
}
const Chapter = styled(ChapterComponent)`
  flex: 1;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Chapter;
