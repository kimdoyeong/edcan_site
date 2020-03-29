import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, useLocation, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import { useSwipeable } from "react-swipeable";

import Navigator from "../Navigator";
import { ChapterStore } from "../../store/chapter";
import { RootState } from "../../store/reducers";

export interface Chapter {
  component: React.ReactNode;
  title: string;
  url: string;
}
interface ChaptersProps {
  chapters: Chapter[];
}

const delta = 50;
function Chapters({ chapters }: ChaptersProps) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentChapter = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const [deltaX, setDeltaX] = useState(0);

  const swipeableHandler = useSwipeable({
    onSwipedLeft: e => {
      if (e.absX < 90) return;
      currentChapter + 1 < chapters.length &&
        history.push(chapters[currentChapter + 1].url);
    },
    onSwipedRight: e => {
      if (e.absX < 90) return;

      currentChapter - 1 >= 0 && history.push(chapters[currentChapter - 1].url);
    },
    onSwiping: e => {
      if (e.absY > 30) {
        setDeltaX(0);
        return;
      }
      setDeltaX(e.deltaX);
    },
    onSwiped: () => {
      setDeltaX(0);
    },
    trackMouse: true,
    delta
  });

  useEffect(() => {
    chapters.forEach((chapter, i) => {
      if (chapter.url === location.pathname) {
        dispatch(ChapterStore.chapterChange(i));
      }
    });
  }, [location, chapters, dispatch]);
  return (
    <ChaptersWrap {...swipeableHandler}>
      {chapters.map((chapter, i) => (
        <Route path={chapter.url} exact key={i}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{chapter.title}: EDCAN</title>
          </Helmet>
          <div
            className="contents"
            style={{
              transform: `translateX(${-(deltaX !== 0
                ? deltaX < 0
                  ? deltaX + delta
                  : deltaX - delta
                : 0) * 1.5}px)`
            }}
          >
            {chapter.component}
          </div>
        </Route>
      ))}
      <Navigator chapters={chapters} />
    </ChaptersWrap>
  );
}
const ChaptersWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & > .contents {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
`;

export default Chapters;
