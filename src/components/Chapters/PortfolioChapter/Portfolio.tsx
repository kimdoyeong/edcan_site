import React from "react";
import styled, { css } from "styled-components";
import { MdPeople } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import portfolioList from "./list";
import darkMode from "../../../utils/style/darkMode";

type PortfolioProps = typeof portfolioList[number];

function Portfolio({
  name,
  images,
  description,
  members,
  prize
}: PortfolioProps) {
  return (
    <Wrap>
      <div className="image">
        <img src={images[0]} alt={name + " Activity"} />
      </div>
      <div className="contents">
        <h1 className="title">{name}</h1>
        <div className="members center">
          <MdPeople />
          {members}
        </div>
        <div className="prize center">
          <FaTrophy />
          {prize}
        </div>
        <p className="description">{description}</p>
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 400px;
  margin: 1em;
  box-sizing: border-box;
  .image > img {
    max-width: 100%;
  }
  .contents {
    .title {
      margin-bottom: 0;
    }
    .center {
      display: flex;
      align-items: center;
    }
    .prize {
      color: #7b7d20;
    }
    .description {
      color: #4f4f4f;
      ${darkMode(css`
        color: #c7c7c7;
      `)}
    }
    .members {
      margin-bottom: 5px;
    }
  }
`;

export default Portfolio;
