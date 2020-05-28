import React from "react";
import Chapter from "../Chapter";
import edcanLogo from "../../assets/logo/edcan.svg";
import { css } from "styled-components";
import darkMode from "../../utils/style/darkMode";
import { AButton } from "../UI/Button";

const style = css`
  .logo {
    max-width: 300px;
    margin: 0 16px;
    width: 50%;
  }
  .title,
  .slogan {
    margin: 0;
  }
  .title {
    margin-bottom: 16px;
    padding-bottom: 7px;
    border-bottom: 1px solid black;
  }
  .slogan {
    color: #575757;
  }
  .apply {
    margin-top: 1em;
  }

  ${darkMode(css`
    .title {
      border-bottom-color: white;
    }
    .slogan {
      color: #aaaaaa;
    }
  `)}

  overflow: hidden;
`;
function MainChapter() {
  return (
    <Chapter center={true} boxStyle={style}>
      <img src={edcanLogo} alt="EDCAN Logo" className="logo" />
      <h1 className="title">EDCAN</h1>
      <p className="slogan">We create new mobile century on the planet.</p>
      <div className="apply">
        <AButton href="https://www.facebook.com/edcancircle">지원하기</AButton>
      </div>
    </Chapter>
  );
}

export default MainChapter;
