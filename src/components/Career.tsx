import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import CareerItem from './CareerItem';

const CareerContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Career: React.FC = () => {
  const careers = [
    {
      company: '크래프톤',
      position: 'Backend Software Engineer | CL3',
      period: '2023.12 - 2024.04',
      keyIssues: ['딥러닝을 게임에 활용하는 시도를 하는 연구 조직'],
      techStack: ['ASP.NET CORE', 'C#', 'MongoDB', 'RabbitMQ', 'Docker', 'Kubernetis', 'Unity3D'],
      description: '기존 프로젝트 개선 작업을 위해, 단기 합류',
      projects: [
        {
          name: '딥러닝/게임 | 웹 서비스/유니티',
          description: '딥러닝을 게임에 활용하는 시도를 하는 연구 조직',
        },
      ],
    },
    {
      company: '오피지지',
      position: 'PEEP Cell | Tech Lead',
      period: '2022.12 - 2023.11',
      techStack: ['Kotlin', 'Spring Boot', 'JPA', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      description: '신 사업 조직 PEEP Cell의 Tech Lead로 합류',
      projects: [
        {
          name: 'PEEP',
          description: 'PEEP의 백엔드 기능 추가 - 화상 채팅, 방/워크스페이스 관리, 인증/인가',
          siteUrl: 'https://peep.lol',
        },
        {
          name: 'qeeq',
          techStack: ['MySQL', 'Hibernate'],
          description: 'qeeq의 백엔드 개발 - 모바일 게임 소셜 앱, 게임 관련 투표/퀴즈 서비스',
          siteUrl: 'https://qeeq.op.gg/ko',
        },
      ],
    },
    {
        company: '크래프톤',
        position: 'Backend Software Engineer | CL3',
        period: '2020.07 - 2022.12',
        projects: [
          {
            name: '딥러닝/게임 | 웹 서비스/유니티',
            techStack: ['ASP.NET CORE', 'C#', 'MongoDB', 'RabbitMQ', 'Docker', 'Kubernetis', 'Unity3D'],
            keyIssues: ['Python (Pytorch), Unity3D MLAgents 기반의 딥러닝 라이브러리 활용\n주력 AI Engineer는 다른 분이 여럿 계신 상황이며, 이해도와 간단한 활용 정도만 가능',
                'C# ASP.NET CORE를 이용한 서버를 통해, 활용되는 서버에서 쉽게 가져갈 수 있게 2차 가공 및 자원 전달 기능 작업',
                'Ocelot (Spring Cloud Gateway, Netflix Zuul, Armeria와 같은 API Gateway용 패키지)로 MSA로 서비스를 구성'
            ],
            description: '딥러닝을 게임에 활용하는 시도를 하는 연구 조직',
          },
          {
            name: '테라 PC | MMORPG',
            techStack: ['C++ 14', 'IOCP', 'SQL Server', 'ODBC', 'ASP.NET MVC'],
            keyIssues: ['한국 (넥슨 서비스 -> 자체 서비스 이관), 북미, 유럽, 일본, 대만 서비스',
                'C++ 14, VS2019 기반의 서버 기능 개발/트러블 슈트/퍼포먼스 튜닝',
                'C# ASP.NET MVC 기반 Admin Tool 개발'
            ],
            description: '트러블 슈트, 코드 리뷰, 스트레스 테스트, 유닛 테스트, 소통 프로세스 개선',
          },
        ],
      },
      {
        company: '모히또 게임즈',
        position: '프로젝트 M | 프로그램 팀장',
        period: '2019.05 - 2020.07',
        projects: [
          {
            name: '프로젝트 M | 수집형 RPG | 서버 & 클라이언트 개발',
            techStack: ['C#', 'ASP.NET CORE', 'Unity3D', 'RabbitMQ', 'MongoDB', 'MariaDB', 'WebSocket', 'Docker', 'Kubernetis', 'Ocelot (API Gateway)'],
            keyIssues: ['.NET CORE 3, ASP NET CORE 3 기반의 MSA아키텍쳐 구축\nKubernetis, Docker를 이용한 서비스 구축 및 배포',
                '웹 기반 기술로 MORPG 장르의 서버 구축',
                'RabbitMQ, WebSocket, MongoDB, MariaDB등 오픈 소스를 기반으로 한 서비스 구축',
                'Unity3D, UGUI기반 및 컨텐츠 핸들링 로직 구현'
            ],
            description: '수집형 RPG의 전반적인 로직 프로그래밍과 기술 결정. 서버 아키텍쳐 구성',
          }
        ],
      },
      {
        company: 'NHN',
        position: '클라우드 개발실 | 선임',
        period: '2018.09 - 2019.05',
        projects: [
          {
            name: 'TOAST 클라우드 | 공통 모듈 (CAB) | 풀스택 개발',
            techStack: ['Vue.js', 'Java 11', 'Spring Boot 2', 'JPA', 'MySQL'],
            keyIssues: ['CloudTrail 개발\nTOAST 클라우드 서비스의 사용 이력 추적 및 조회 시스템인 CloudTrail의 `Frontend 개발`',
                '다국어 서버 개발\nREST API + Admin Tool로 다국어 관리 및 시스템별 범용 다국어 기능',
                '국적에 따른 EMAIL/SMS 발송 기능 개발\nREST API를 통해, 사내 모든 시스템이 이용하는 국적에 따른 EMAIL/SMS 대행 API 작업, 인증, API 스펙을 사내 공통화 하기 쉬운 규격화 한 뒤, 벌크 처리가 용이하게끔 개선'
            ],
            description: 'TOAST 클라우드 (현 NHN 클라우드)의 중앙 자원 관리 서비스 관리',
          }
        ],
      },
      {
        company: '넷마블',
        position: '인프라 개발팀 | 차장',
        period: '2017.07 - 2018.09',
        projects: [
          {
            name: '넷마블 전사 인프라 자동화 도구 | NOS | 백엔드 개발',
            techStack: ['Java 8', 'Spring Boot', 'JPA', 'MySQL', 'MongoDB', 'Netflix Zuul', 'Python', 'Apache Airflow', 'AWS SDK', 'Docker'],
            keyIssues: ['Docker를 이용한 서비스 이미지 생성 및 운용\n리서치 및 도입',
                'AWS SDK를 이용한 서비스 개발\nprivate cloud 시스템과 같은 agent및 컴포넌트를 사용할 수 있게끔 연동하는 드라이버 개발',
                'API Gateway 개발\nSpring Boot 기반의 Netflix Zuul을 통한 endpoint 관리, 권한 관리, 인증 처리 개발.\nMSA에서의 서비스간 중점이 되는 API Gateway를 도입/기존 서비스간 연결 일치화\nMongoDB를 통한 API 통계를 통한 팀내 리포트를 통한 지속적 개선. API Gateway를 통한 endpoint 관리, 인증, 인가 처리 중앙화',
                'Planner 개발\nREST API 연동을 통한 yaml 스크립트 순서대로 API 연결 시스템 (apache airflow와 함께 python 스크립트 이용)',
                'Asset 개발\nIDC 자산 (서버, 네트워크 장비, 스토리지)가 어떤식으로 관리되고 있는지 파악하고 현황 관리를 진행, 관리되지 않던 자산에 대한 이력 추적 및 관리 기능 개발'
            ],
            description: '넷마블 IDC 클라우드 화 및 Public 클라우드 관리 서비스',
          }
        ],
      },
      {
        company: 'NHN Entertainment',
        position: '토이 스튜디오 | 선임',
        period: '2016.05 - 2017.07',
        projects: [
          {
            name: '프로젝트 G | 서버',
            techStack: ['Java 8', 'MySQL', 'Netty', 'Akka'],
            keyIssues: ['Java Netty, Akka를 이용한 네트웍 엔진 구축'],
            description: '캐주얼 게임 XLO (NHN 자체 모듈) 기반의 서버 Java Netty + Akka로 포팅',
          },
          {
            name: '프로젝트 MS | 서버, 클라이언트',
            techStack: ['C#', 'Python', 'Django'],
            keyIssues: ['.NET CORE 1.2 및 Django를 이용한 서버 구현'],
            description: '캐주얼 보드 게임 서비스 구현',
          },
          {
            name: '우파루 사가 | 서버 유지 보수',
            techStack: ['C++'],
            keyIssues: ['캐주얼 디펜스 게임 우파루 사가 유지 보수',
                '웹 기반 기술로 MORPG 장르의 서버 구축',
                'XLO라는 C++ NHN 자체 모듈 기반'
            ],
            description: '수집형 RPG의 전반적인 로직 프로그래밍과 기술 결정. 서버 아키텍쳐 구성',
          }
        ],
      },
      {
        company: '레벨구구구',
        position: 'CTO',
        period: '2015.01 - 2016.01',
        projects: [
          {
            name: '밤을 걷는 선비 | Action RPG | CTO',
            techStack: ['Unity3D', 'C#', 'Ruby on Rails', 'Ruby', 'PostgreSQL', 'MongoDB'],
            keyIssues: ['프로그램팀 관리, 아트/기획과 협업 조율',
                '팀 빌딩, 소프트 런칭, 상용화 까지 진행',
                '클라이언트/서버 공용 모듈 및 서버 개발',
                '로그 시스템 및 GM툴 구현\n기본 DB PostgreSQL\n운영에 필요한 지표 및 기록에 대해 MongoDB 적용',
                '프로젝트 지표\n플레이스토어 최고 매출 89위 (MCU : 2만 5천 DAU : 23만)'
            ],
            description: '수집형 RPG의 서버 구성 및, NGUI를 이용한 UI 코딩 및 로직 개발',
          }
        ],
      },
      {
        company: '마이에트 엔터테인먼트',
        position: '건즈2팀 | 선임',
        period: '2012.06 - 2014.10',
        projects: [
          {
            name: '건즈2 | TPS | 서버',
            techStack: ['C++', 'Ruby', 'IOCP', 'SQL Server', 'ODBC', 'AWS'],
            keyIssues: ['AWS 기반의 글로벌 서비스 구축 및 운용\nAWS CLI와 연동해 서비스 구축/알람 연동/Alive Check를 처리. VM 기반 위에 고성능 서비스 구축 및 운용\nRuby(스크립트) + AWS CLI (서비스 운용 명령) + Keeper (C++ Windows Service Agent)',
                '상시 테스트 (스트레스 테스트, 유닛 테스트) 도입, 로그 시스템 도입 및 로그 기반 개선\n베이스라인 (3ms) 이하로 패킷 처리 속도를 규정짓고, 그에 따른 최적화를 수행함으로써 서비스 트래픽 및 서비스 반응성에 지장 없는 코어 라이브러리 개선',
                '프로젝트 지표\n글로벌 스팀 상용화 (MCU 2만5천, DAU 27만)\n한국 CBT 1~3\n유럽 CBT 1~8, OBT\n대만 CBT 1~3, OBT, 상용화'
            ],
            description: '수집형 RPG의 전반적인 로직 프로그래밍과 기술 결정. 서버 아키텍쳐 구성',
          }
        ],
      },
      {
        company: '엔트리브 소프트',
        position: '팡야실 | 대리',
        period: '2009.12 - 2012.04',
        projects: [
          {
            name: '팡야 | 온라인 골프 | 서버',
            techStack: ['C++', 'IOCP', 'SQL Server', 'ODBC'],
            keyIssues: ['서버 관리 시스템 구현 (코드 네임 서브 라이트)\nWindows Service Agent를 통한 원격 명령/운용 시스템',
                '트러블 슈트 장애 원인에 대한 근본적인 개선\n병목 포인트, 크래시 지점, 크래시 원인 파악 등을 통한 서버 다운 이슈 제거',
                '네트워크 라이브러리 리뉴얼 (코드네임 레드문)\n스레드 디자인, lock 모델에 문제가 있는 부분을 계측 및 개선, 패킷 receive 부터 queueing, processing 까지 전반적인 개선 작업이었으므로 코드 네임을 짓고 리뉴얼',
                '프로젝트 지표\n태국 서비스 (MCU 6만 DAU 50만)\n일본 서비스 (MCU 2만 8천, DAU 15만)\n한국 서비스 (MCU 4천, DAU 2만)\n글로벌 서비스 (MCU : 1만 2천, DAU 20만)'
            ],
            description: 'PC 온라인 골프 게임 트러블 슈트 및 개선',
          }
        ],
      },
      {
        company: '네오액트',
        position: '서버팀 | 책임',
        period: '2006.03 - 2009.11',
        projects: [
          {
            name: '포키포키 | 소셜 네트워크 | 서버',
            techStack: ['C++', 'IOCP', 'SQL Server', 'ODBC'],
            keyIssues: ['서버 당 동접 1000~1500을 소화하던 서버를 장비당 3300명선까지 끌어올림\n단일 서버 기준 유저 3300명 외에도 NPC 2000마리를 동작하게끔 개선',
                '패킷 처리 구조, DB 처리 응답 구조 개선\n패킷 스레드에서 바로 로직을 처리하는 구조에서, 메시지 큐를 두고 큐에서 처리하도록 변경 (네트웍 스레드 효율 증가)\n스레드별 위임 가능한 동작을 비동기로 동작 시킨 뒤, 다시 Queue로 돌려 받아서 비동기 처리',
                '서버 관리 시스템 구현 (코드네임 PMS)'
            ],
            description: '프로젝트 지표\n일본 서비스 (MCU 2천, DAU 1만8천)\n대만 서비스 (MCU 5천, DAU 1만5천)\n한국 서비스 (MCU 3천, DAU 1만 1천)',
          },
          {
            name: '카오스 온라인 | AOS | 서버',
            techStack: ['C++', 'IOCP', 'SQL Server', 'ODBC'],
            keyIssues: ['네트워크 모듈 개발\nTCP 네트워크 모듈, Reliable UDP 모듈 개발'],
            description: '워크래프트3 MOD인 카오스의 온라인 게임화 서버 개발',
          }
        ],
      },
  ];

  return (
    <CareerContainer>
      <Typography variant="h4" gutterBottom>
        Career
      </Typography>
      {careers.map((career, index) => (
        <CareerItem key={index} {...career} />
      ))}
    </CareerContainer>
  );
};

export default Career;
