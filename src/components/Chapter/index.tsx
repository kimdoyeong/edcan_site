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
  min-height: 100vh;
  box-sizing: border-box;
`;

export default Chapter;
