import React from "react";
import Chapter from "../Chapter";
import { css } from "styled-components";
import darkMode from "../../utils/style/darkMode";

import JCH from "../../assets/image/profile/정찬효.jpg";
import HDY from "../../assets/image/profile/황두영.jpg";
import KDY from "../../assets/image/profile/김도영.png";
import CJH from "../../assets/image/profile/신진혁.png";
import LJN from "../../assets/image/profile/이제니.jpg";
import KMH from "../../assets/image/profile/곽민혁.jpg";
import CNY from "../../assets/image/profile/신나영.jpg";
import Github from "../Icons/Github";

const members = [
  {
    name: "정찬효",
    position: "부장, 개발자",
    introduce: "주석은 달게, 코드는 짜게",
    github: "https://github.com/roian6",
    image: JCH
  },
  {
    name: "황두영",
    position: "부부장, 개발자",
    introduce: "넘어지면 다시 일어서서",
    github: "https://github.com/namecode12",
    image: HDY
  },
  {
    name: "김도영",
    introduce: "망해라 (사이트 개발자)",
    position: "개발자",
    github: "https://github.com/kimdoyeong",
    image: KDY
  },
  {
    name: "신진혁",
    introduce: "한다면 하는 남자 신진혁",
    position: "개발자",

    github: "https://github.com/sylvia3259",
    image: CJH
  },
  {
    name: "이제니",
    introduce: "집 가고 싶다",
    position: "개발자",

    image: LJN
  },
  {
    name: "조성현",
    introduce: "EDCAN 6기 개발자",
    position: "개발자",

    image: "https://http.cat/404"
  },
  {
    name: "곽민혁",
    introduce: "모션그래픽을 좋아하는 부원입니다",
    position: "디자이너",
    image: KMH
  },
  {
    name: "신나영",
    introduce: "갓디자뇨 꿈나무 ㅎ.ㅎ",
    position: "디자이너",
    blog: "https://blog.naver.com/ghhhjh",
    image: CNY
  }
];
function MemberChapter() {
  return (
    <Chapter boxStyle={style}>
      <article className="article">
        <h1 className="title">Members</h1>

        <div className="members">
          {members.map((data, i) => (
            <div className="member" key={i}>
              <img
                src={data.image}
                alt={`${data.name} Profile`}
                className="profileImage"
              />
              <h3 className="name">{data.name}</h3>
              <p className="position">{data.position}</p>
              <q className="introduce">{data.introduce}</q>
              {data.github && (
                <div className="github">
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github width="30" />
                  </a>
                </div>
              )}
              {data.blog && (
                <div className="blog">
                  <a href={data.blog} target="_blank" rel="noopener noreferrer">
                    블로그
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
    </Chapter>
  );
}

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 0;
  }
  .article {
    padding: 3em 1.5em;
  }
  .members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .member {
      width: 250px;
      text-align: center;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      h3.name {
        margin-bottom: 0;
      }
      p.position {
        margin: 5px 0;
        color: #757575;

        ${darkMode(css`
          color: #a6a6a6;
        `)}
      }
      img.profileImage {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center;
        border-radius: 75px;
        margin: 0 auto;
      }
      .introduce {
        display: block;
        margin-top: 18px;
        font-size: 1.2em;
      }
      .github,
      .blog {
        display: block;
        margin-top: auto;
        padding: 8px 0;
      }

      .blog > a {
        text-decoration: none;

        ${darkMode(css`
          color: #b5ceff;
        `)}
      }
    }
  }
`;
export default MemberChapter;
