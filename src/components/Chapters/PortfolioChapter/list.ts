import Atti1 from "../../../assets/image/portfolio/atti_1.jpg";
import Atti2 from "../../../assets/image/portfolio/atti_2.jpg";
import Atti3 from "../../../assets/image/portfolio/atti_3.jpg";
import Atti4 from "../../../assets/image/portfolio/atti_4.jpg";
import builders from "../../../assets/image/portfolio/builders.jpg";
import piktochain from "../../../assets/image/portfolio/piktochain.jpg";
import hanul from "../../../assets/image/portfolio/hanul.jpg";
import stuflo from "../../../assets/image/portfolio/stuflo.jpg";
import flexilearn from "../../../assets/image/portfolio/flexilearn.jpg";
import forestSafe from "../../../assets/image/portfolio/forestsafe.jpg";
import bag from "../../../assets/image/portfolio/bag.jpg";
import job1 from "../../../assets/image/portfolio/2019job_1.jpg";
import job2 from "../../../assets/image/portfolio/2019job_2.jpg";
import job3 from "../../../assets/image/portfolio/2019job_3.jpg";
import job4 from "../../../assets/image/portfolio/2019job_4.jpg";

const portfolioList = [
  {
    name: "아띠 (Atti)",
    members: "김현우",
    prize: "모바일콘텐츠 개발대회 은상",
    description: "외국인 관광객을 위한 관광 정보앱",
    images: [Atti1, Atti2, Atti3, Atti4]
  },
  {
    name: "빌더즈",
    members: "김도영, 신나영, 정찬효, 황두영",
    prize: "모바일콘텐츠 개발대회 동상",
    description: "대회, 공모전 출전을 위한 팀 빌딩 앱",
    images: [builders]
  },
  {
    name: "픽토체인",
    members: "정찬효",
    prize: "선린해커톤 금상",
    description: "현실 자물쇠 키체인 서비스",
    images: [piktochain]
  },
  {
    name: "한울",
    members: "김민",
    prize: "선린해커톤 은상",
    description: "다이어리를 통한 진로 분석, 추천 서비스",
    images: [hanul]
  },
  {
    name: "StuFlo",
    members: "김현우, 표영우",
    prize: "선린해커톤 동상",
    description: "흐름과 플로우를 통한 학습 서비스",
    images: [stuflo]
  },
  {
    name: "FlexiLearn",
    members: "표영우",
    prize: "e-ICON 세계대회 '3rd Place Award' (APEC국제교육협력원장상)",
    description: "누구에게나 열려있는 통합교육 플랫폼",
    images: [flexilearn]
  },
  {
    name: "ForestSafe",
    members: "김도영, 김현우, 송영범",
    prize: "IoT 아이디어 공모전 금상",
    description: "불법 벌목, 산불 감지를 위한 IoT 장비 및 서비스",
    images: [forestSafe]
  },
  {
    name: "위험감지 알림가방",
    members: "이현재",
    prize: "WICO (세계발명창의대회) 금상",
    description: "위험을 감지해 방지하는 가방",
    images: [bag]
  },
  {
    name: "2019 고졸성공 취업 대박람회",
    members: "김현우, 이정우, 정민서, 정찬효, 표영우",
    prize: "동아리 경진대회 특별상",
    description: "IoT 및 앱 시연",
    images: [job1, job2, job3, job4]
  }
];

export default portfolioList;
