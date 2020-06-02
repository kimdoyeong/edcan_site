import React from "react";
import { css } from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import Chapter from "../Chapter";
import edcanLogo from "../../assets/logo/edcan.svg";
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
  .buttons {
    margin-top: 1em;
    display: flex;
    & > * {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    & > .apply {
      background: rgb(20, 167, 198);
      color: white;
    }
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
      <div className="buttons">
        <AButton
          href="https://m.facebook.com/story.php?story_fbid=2437810663189238&id=1409478239355824"
          className="apply"
        >
          지원하기
        </AButton>
        <AButton href="https://www.youtube.com/watch?v=91hmkywn4DQ&feature=youtu.be">
          <MdPlayArrow /> 홍보영상 보기
        </AButton>
      </div>
    </Chapter>
  );
}

export default MainChapter;
