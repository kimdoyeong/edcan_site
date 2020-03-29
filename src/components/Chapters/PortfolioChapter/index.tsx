import React from "react";
import Chapter from "../../Chapter";
import { css } from "styled-components";
import portfolioList from "./list";
import Portfolio from "./Portfolio";

function PortfolioChapter() {
  return (
    <Chapter boxStyle={style}>
      <article className="article">
        <h1>Portfolio</h1>
        <div className="portfolio-list">
          {portfolioList.map((props, i) => (
            <Portfolio key={i} {...props} />
          ))}
        </div>
      </article>
    </Chapter>
  );
}

const style = css`
  > .article {
    padding: 3em 1.5em;
    > .portfolio-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
export default PortfolioChapter;
