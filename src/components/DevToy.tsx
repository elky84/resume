import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import DevToyItem from './DevToyItem';

const DevToyContainer = styled(Box)`
  margin-bottom: 20px;
`;

const devToysData = [
  {
    title: "GM - 2D MMORPG",
    description: "Unity 3D, C# DotNetty 로 구현한 습작 2D MMORPG",
    youtubeUrls: [{ name: "보스전, 던전, 등가 교환 주문서", url: "https://www.youtube.com/watch?v=Ot17tzF75MM" },
      { name: "변신 주문서, 몬스터 소환 주문서", url: "https://www.youtube.com/watch?v=BVraOJ3WA5s" },
      { name: "스킬 및 전투", url: "https://www.youtube.com/watch?v=ObgokCLej_E" },
      { name: "투명 망토", url: "https://www.youtube.com/watch?v=jlFLemggveQ" }
    ],
    techStack: ["C#", "Unity3D", "DotNetty", "MongoDB", ".NET 6"],
    downloadUrls: [{windows: "https://drive.google.com/file/d/14gzmzYJ13sKcmOlVEuwDe238V0AN18wu/view?usp=drive_link"}],
    screenShots: ["/screenshots/gm_01.jpeg", "/screenshots/gm_02.jpeg", "/screenshots/gm_03.jpeg", 
      "/screenshots/gm_04.jpeg", "/screenshots/gm_05.jpeg", "/screenshots/gm_06.jpeg"]
  },
  {
    title: "light",
    description: "C++로 개발한 IOCP, OLE DB, flatbuffers 등을 이용한 게임 서버 라이브러리. (Direct-X 9.0C를 이용한 클라이언트 기능들도 포함되어 있지만, 서버 위주의 구현)",
    githubUrl: "https://github.com/elky84/light",
    techStack: ["C++", "IOCP", "Direct-X"],
  },
  {
    title: "web-crawler",
    description: "Abot2, ASP.NET 6로 구현한 웹 (인벤, 루리웹, 오늘의 유머, FM코리아 등) 크롤러 & 알리미.",
    githubUrl: "https://github.com/elky84/web-crawler",
    techStack: ["ASP.NET CORE 6", "Abot2", "C#", "MongoDB", ".NET 6"]
  },
  {
    title: "stock-crawler",
    description: "ASP.NET 6로 구현한 네이버 주식 크롤러, 분석기\n다양한 알고리즘으로 종목 선별 기능.\n조건에 따른 자동 매수/매도를 통한 모의 투자 기능.",
    githubUrl: "https://github.com/elky84/stock-crawler",
    techStack: ["ASP.NET CORE 6", "C#", "MongoDB", ".NET 6"]
  },
  {
    title: "lol-crawler",
    description: "ASP.NET 6로 구현한 LOL 게임 시작/결과 추적기\n최초 버전은 Java 8, Spring Boot로 구현했었으나, 디버깅, 배포용이성으로 C# 포팅",
    githubUrl: "https://github.com/elky84/lol-crawler",
    techStack: ["ASP.NET CORE 6", "C#", "MongoDB", ".NET 6"]
  },
  {
    title: "WebCommunity",
    description: "ASP.NET 6, MongoDb, Vue.js로 구현한 웹 커뮤니티\n동적 게시판, 유튜브 등의 임베딩 가능한 에디터, 댓글, 대댓글 기능등을 구현",
    githubUrl: "https://github.com/elky84/WebCommunity",
    techStack: ["ASP.NET CORE 6", "C#", "MongoDB", ".NET 6", '']
  },
  {
    title: "ExcelToDotnet",
    description: "Excel 정의 데이터를 C# class, enum, json 으로 뽑아서 게임 혹은 각종 앱에 편하게 쓸 수 있게 해주는 패키지",
    githubUrl: "https://github.com/elky84/ExcelToDotnet/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/ExcelToDotnet"
  },
  {
    title: "EzDotNetty",
    description: "Java의 Netty (소켓 라이브러리)를 Microsoft가 포팅한 DotNetty를 편하게 쓸 수 있게 지원해주는 패키지",
    githubUrl: "https://github.com/elky84/EzDotNetty/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/EzDotNetty"
  },
  {
    title: "EzAspDotnet",
    description: "ASP.NET 에서 사용되는 각종 편의 기능을 묶어서 제공하는 지원 패키지",
    githubUrl: "https://github.com/elky84/EzAspDotnet/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/EzAspDotnet"
  },
  {
    title: "EzMongoDB",
    description: "MongoDb를 C#에서 편하게 쓸 수 있게 지원해주는 패키지",
    githubUrl: "https://github.com/elky84/EzMongoDB/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/EzMongoDB"
  },
  {
    title: "JsonTable",
    description: "C#, Unity3D 에서 Json 형태의 데이터를 정의한 자료구조로 로드하고, 매핑 시켜주는 패키지",
    githubUrl: "https://github.com/elky84/JsonTable/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/JsonTable"
  },
  {
    title: "EnumExtend",
    description: "C#에서 Enum의 설명 기능을 Attribute로 추가, 이외에도 int 로의 변환, 모두 가져오기 등의 유틸리티 기능을 확장 지원해주는 패키지",
    githubUrl: "https://github.com/elky84/EnumExtend/",
    techStack: ["C#", ".NET 8"],
    nugetUrl: "https://www.nuget.org/packages/EnumExtend"
  },
  {
    title: "SRPG",
    description: "2D SRPG 게임",
    youtubeUrls: [{ name: "플레이 영상", url: "https://www.youtube.com/watch?v=ojFI4uvDnhA" }
    ],
    techStack: ["C#", "Unity3D", ".NET 6"],
    downloadUrls: [{windows: "https://drive.google.com/file/d/1_-8mTDF4bBEhYmt2-0e6ReAMbZtMGNA6/view?usp=sharing"}],
    screenShots: ["/screenshots/SRPG_01.jpeg", "/screenshots/SRPG_02.jpeg", "/screenshots/SRPG_03.jpeg", 
      "/screenshots/SRPG_04.jpeg", "/screenshots/SRPG_05.jpeg", "/screenshots/SRPG_06.jpeg"]
  },
  {
    title: "NineWars (2D Auto Battler)",
    description: "DirectX 9.0, C++로 구현한 습작 2D Auto Battler.\nFootball Manager 시리즈의 영향을 받아, 전략 설정, 유닛 배치를 기반으로 동작하는 게임",
    githubUrl: "https://github.com/elky84/NineWars",
    techStack: ["Direct-X", "C++"],
    youtubeUrls: [{name: "플레이 영상", url: "https://www.youtube.com/watch?v=cXwk5lkvm_Y"}]
  }
];

const DevToy: React.FC = () => {
  return (
    <DevToyContainer>
      {devToysData.map((devToy, index) => (
        <DevToyItem key={index} {...devToy} />
      ))}
    </DevToyContainer>
  );
};

export default DevToy;
