import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";

import { Chapter } from "../Chapter/Chapters";
import { RootState } from "../../store/reducers";
import darkMode from "../../utils/style/darkMode";
interface NavigatorProps {
  chapters: Chapter[];
}
function Navigator({ chapters }: NavigatorProps) {
  const [menu, setMenu] = useState(false);

  const currentPage = useSelector((state: RootState) => state.Chapter.chapter);
  const location = useLocation();
  const history = useHistory();

  const closeListener = () => setMenu(false);

  // 메뉴바 클릭 이펙트
  useEffect(() => {
    const removeListener = () =>
      window && window.removeEventListener("click", closeListener);

    if (!menu) {
      removeListener();
      return;
    }
    window && window.addEventListener("click", closeListener);

    return removeListener;
  }, [menu]);

  // 키보드 이펙트
  useEffect(() => {
    const toPrev = () => {
      if (!currentPage) return;
      history.push(chapters[currentPage - 1].url);
    };
    const toNext = () => {
      if (currentPage + 1 >= chapters.length) return;
      history.push(chapters[currentPage + 1].url);
    };
    const listener = (e: KeyboardEvent) => {
      if (e.keyCode === 37) toPrev();
      if (e.keyCode === 39) toNext();
      if (e.keyCode === 13) toNext();
    };

    window && window.addEventListener("keydown", listener);

    return () => window && window.removeEventListener("keydown", listener);
  }, [chapters, currentPage, history]);
  const chaptersMenu = chapters.map((chapter, i) => (
    <Link
      className={["chapter", chapter.url === location.pathname && "active"]
        .filter(Boolean)
        .join(" ")}
      to={chapter.url}
      key={i}
    >
      {chapter.title}
    </Link>
  ));
  return (
    <NavigatorStyle>
      {menu && <div className="chapters">{chaptersMenu}</div>}
      <div
        className="open button"
        role="button"
        aria-label="Open Navigator"
        onClick={() => setMenu(menu => !menu)}
      >
        <div className="icon">
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="right">
        <div className="count">
          {currentPage + 1} / {chapters.length}
        </div>
        {currentPage > 0 && (
          <Link
            to={chapters[currentPage - 1].url}
            className="button pagination"
          >
            &lt;
          </Link>
        )}
        {currentPage + 1 < chapters.length && (
          <Link
            to={chapters[currentPage + 1].url}
            className="button pagination"
          >
            &gt;
          </Link>
        )}
      </div>
    </NavigatorStyle>
  );
}

const NavigatorStyle = styled.nav`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  border: 1px solid transparent;
  display: flex;
  box-sizing: border-box;
  background: #ebebeb;

  .open {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    .icon > div {
      width: 45px;
      height: 10px;
      background: #666666;
      margin: 5px 0;
      border-radius: 2.5px;
      transition: background 0.5s;
    }
    :hover {
      .icon > div {
        background: white;
      }
    }
  }
  .chapters {
    position: absolute;
    bottom: 70px;
    background: #455a64;
    width: 240px;
    margin: 0 10px;
    animation: openAnimation 0.5s;
    transform-origin: bottom;

    .chapter {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 1em;
      cursor: pointer;
      transition: background 0.5s, color 0.5s;
      color: white;
      &.active {
        background: #00b8d4;
        color: black;
      }
      :hover {
        &.active {
          background: #00b8d4;
        }
        background: #eaeaea;
        color: black;
      }
    }
    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 20px;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: #455a64 transparent transparent transparent;
    }

    @keyframes openAnimation {
      0% {
        transform: scaleY(0);
      }
      100% {
        transform: scaleY(1);
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .count {
      padding: 0 16px;
    }
  }
  .button {
    transition: background 0.5s, color 0.5s;
    cursor: pointer;
    height: 100%;
    color: inherit;
    text-decoration: none;
    :hover {
      background: #455a64;
      color: white;
    }
    &.pagination {
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
    }
  }

  ${darkMode(css`
    background: #2b2b2b;
    .open .icon > div {
      background: #8a8a8a;
    }
  `)}
`;
export default Navigator;
