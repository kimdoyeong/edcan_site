import React from "react";
import Chapters from "./components/Chapter/Chapters";
import MainChapter from "./components/Chapters/MainChapter";
import IntroduceChapter from "./components/Chapters/IntroduceChapter";
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
        }
      ]}
    />
  );
}

export default App;
