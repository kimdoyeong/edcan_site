import React from "react";
import Chapter from "../Chapter";
import { css } from "styled-components";

const style = css`
  overflow-y: auto;

  .contents {
    padding: 1.5em;
    margin-bottom: 100px;
  }
  .image {
    height: 50vh;
    max-height: 300px;
    background: gray;
  }
`;
function IntroduceChapter() {
  return (
    <Chapter boxStyle={style}>
      <div className="image">이미지 들어갈 곳</div>
      <article className="contents">
        <h1>Hello, EDCAN</h1>

        <p>
          EDCAN은 <strong>모바일 콘텐츠 제작 동아리</strong>로, 소프트웨어과
          학생들은 Android Studio를 사용하여 부원들이 목표로 하는 애플리케이션을
          제작하고, 멀티미디어과 학생들은 Sketch와 Adobe XD를 사용하여 실전
          기반의 연구 및 디자인을 통해 다양한 팀 프로젝트를 기반으로{" "}
          <strong>부원 간 협업을 통한 실력 향상</strong>을 목표로 합니다. 동시에
          IoT(사물인터넷) 등 선택적 수업을 진행하여 특정 분야에 국한되지 않게{" "}
          <strong>
            각 부원의 개성 또한 최대한 발휘하고 시너지를 일으킬 수 있도록 최선을
            다합니다.
          </strong>
        </p>
        <p>
          EDCAN에서는 체계적인 <strong>유닛별 수업</strong>을 진행하여 다양한
          분야의 대회에서 수상하였고, 하나의 동아리라는 공동체 내에서{" "}
          <strong>서로 학습하고 공유하며 성장해 나가는 것을 목표로 활동</strong>
          합니다. 현재 총 4개의 유닛에서 우리 동아리 출신의 졸업 선배님을
          비롯하여 외부 강사를 초청하여 전문적인 수업을 진행하고 있습니다.
          애플리케이션 수업과 동시에 동아리 내 팀 프로젝트를 진행하여 개발자와
          디자이너가 함께 협업하여 활동할 수 있도록 하였습니다.
        </p>
      </article>
    </Chapter>
  );
}

export default IntroduceChapter;
