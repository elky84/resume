import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import StrengthItem from './StrengthItem';

const StrengthsContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Strengths: React.FC = () => {
  const strengths = [
    {
      title: '프로젝트 매니저, 테크 리드',
      details: ['일정 관리, 업무 프로세스, 협업 문화 구성', '다수의 면접관, 신입 사원 교육, 주니어 케어 경험을 통한 개발자 육성, 팀 구성', '기술 결정 및 기술 선행 검토, 도입 가이드 라인 제시, 트러블 슈트'],
    },
    {
      title: '대용량 처리',
      details: ['넷마블 인프라 자동화 시스템 API Gateway 개발. 자체 수집한 Audit Log (Full Log) 취합 및 관리', 
        '소켓 서버 기반의 성능 측정 도구를 구현 및 개선\n잠금 객체 이슈, 메시지 큐 병목 해결, 로직 비동기 처리, 분산 처리와 같은 방법으로  퍼포먼스 튜닝\nDB 로그, 서버 어플리케이션 로그, OS 퍼포먼스 로그를 취합하여 알림 및 개선',
        'DB 쿼리 튜닝 및 개선\nSlow Query 추출, DB 호출 구조 개선 (캐시 서버 도입, 인메모리 캐시, 디비 저장 간격 조절 등), 용도 부하별로 호출 스레드 분산'],
    },
    {
      title: '상용화',
      details: ['포키포키 CBT~ 상용화 📅 2006-03~2009-11', '건즈2 CBT~상용화 📅 2012-06~2014-10', '밤을 걷는 선비 초기 개발~상용화 📅 2015-01~2016-02'],
    },
    {
      title: '레거시 시스템 개선',
      details: ['포키포키 (📅 2006~2009), 팡야 (📅 2009~2012, 5년~8년차 서비스), 테라 (📅 2020~2022, 9년~12년차 서비스) 등 다양한 레거시 시스템을 운용\n운용 과정에서 필요한 부분을 덧데기 보다는, 근본적인 원인을 파악하고 개선하는 작업 진행\nC++ 소켓 서버 운용 시에는 덤프가 남지 않는 크래시, 메모리 덮어쓰기, 메모리 릭, 수십초 단위의 큰 지연 같은 이슈가 많이 생겼고, 이를 해결'],
    },
    {
      title: '높은 인프라 이해도',
      details: ['인프라실 내부 개발 조직 (넷마블)에 속해있으면서, DevOps 업무를 통한 이해도 향상\n넷마블 자체가 Private Cloud, AWS, GCP를 병행 지원하는 과정에서 이해도 향상', 
        'NHN 에서도 클라우드 플랫폼 소속으로 업무 과정에서 인프라 이해도를 높일 수 있었음',
        '게임 개발팀 소속일 때도, 시스템 프로그래밍, 사내 스트레스 테스트용 머신 수십대 관리/직접 IDC 머신 관리'],
    },
    {
      title: '다양한 언어/환경 실무 적용',
      details: ['C++ (네오액트, 팡야, 건즈2), C# (모히또 게임즈, 레벨구구구, 테라, NHN), Java(NHN, 넷마블), Python (넷마블, NHN), Java Script (넷마블, NHN)', 
        'Windows(대다수 게임 프로젝트), Linux (넷마블, NHN 등)',
        'RDB(MySQL, SQL Server, PostgreSQL), NoSQL (MongoDB, Redis)'],
    },
    {
      title: '자동화',
      details: ['다양한 자동화 도구를 개발, 프로세스 개선 등을 통해 업무 비효율을 줄이는 데에 관심이 많고 진행. (배포, 테스트, 부하 테스트, 로그 쉬핑, 분석)'],
    },
    {
      title: '다양한 업무 분야 경험',
      details: ['웹에서는 다양한 프레임워크(Spring Boot, ASP.NET, Django, Ruby on rails)로 백엔드, Vue.js를 이용한 프론트엔드를 경험.', 
        '게임 개발에서도 다양한 언어로 서버 (C# DotNetty, SuperSocket, C++ IOCP, boost asio), DirectX와 Unity3D를 이용한 클라이언트 개발 경험 보유'],
    },
  ];

  return (
    <StrengthsContainer>
      <Typography variant="h4" gutterBottom>
        Strengths
      </Typography>
      {strengths.map((strength, index) => (
        <StrengthItem key={index} {...strength} />
      ))}
    </StrengthsContainer>
  );
};

export default Strengths;
