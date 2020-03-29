import React from "react";
import Chapter from "../Chapter";
import { css } from "styled-components";

function PortfolioChapter() {
  return (
    <Chapter boxStyle={style}>
      <article className="article">
        <h1>Portfolio</h1>
        <p>준비중</p>
      </article>
    </Chapter>
  );
}

const style = css`
  > .article {
    padding: 3em 1.5em;
  }
`;
export default PortfolioChapter;
