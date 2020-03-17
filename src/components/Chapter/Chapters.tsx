import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, useLocation } from "react-router";
import { useDispatch } from "react-redux";

import Navigator from "../Navigator";
import { ChapterStore } from "../../store/chapter";

export interface Chapter {
  component: React.ReactNode;
  title: string;
  url: string;
}
interface ChaptersProps {
  chapters: Chapter[];
}
function Chapters({ chapters }: ChaptersProps) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    chapters.forEach((chapter, i) => {
      if (chapter.url === location.pathname) {
        dispatch(ChapterStore.chapterChange(i));
      }
    });
  }, [location, chapters, dispatch]);
  return (
    <ChaptersWrap>
      {chapters.map((chapter, i) => (
        <Route path={chapter.url} exact key={i}>
          {chapter.component}
        </Route>
      ))}
      <Navigator chapters={chapters} />
    </ChaptersWrap>
  );
}
const ChaptersWrap = styled.div``;

export default Chapters;
