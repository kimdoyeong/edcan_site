import React from "react";
import Chapters from "./components/Chapter/Chapters";
import MainChapter from "./components/Chapters/MainChapter";
import IntroduceChapter from "./components/Chapters/IntroduceChapter";
import MemberChapter from "./components/Chapters/MemberChapter";
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
        }
      ]}
    />
  );
}

export default App;
