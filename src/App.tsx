import React from "react";
import Chapters from "./components/Chapter/Chapters";
import MainChapter from "./components/Chapters/MainChapter";
import IntroduceChapter from "./components/Chapters/IntroduceChapter";
import MemberChapter from "./components/Chapters/MemberChapter";
import PortfolioChapter from "./components/Chapters/PortfolioChapter";
function App() {
  return (
    <Chapters
      chapters={[
        {
          title: "EDCAN",
          component: <MainChapter />,
          url: "/"
        },
        {
          title: "Hello, EDCAN",
          component: <IntroduceChapter />,
          url: "/hello-edcan"
        },
        {
          title: "Members",
          component: <MemberChapter />,
          url: "/members"
        },
        {
          title: "Portfolio",
          component: <PortfolioChapter />,
          url: "/portfolio"
        }
      ]}
    />
  );
}

export default App;
