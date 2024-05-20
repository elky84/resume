import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import IntroductionItem from './IntroductionItem';

const IntroductionContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Introduction: React.FC = () => {
  const introductions = [
    {
      point: '업무 프로세스, 협업',
      details: ['비효율을 제거해, 결과물의 퀄리티를 높이면서도, 시너지가 나고, 불 필요한 스트레스를 제거하는 것에 아주 관심이 많습니다', 
      '좋은 개발자이면서도, 좋은 동료가 되는 방법에 대해서도 관심이 많고, 그러한 팀을 만들고 싶은 욕심이 있습니다.',
      '동료와 함께 일하는 즐거움, 함께 성장하는 즐거움을 통해 좋은 팀을 만들고 즐겁게 일하고 싶습니다.'],
    },
    {
      point: '시도와 개선',
      details: ['프로그램은 안정성이 최우선이지만, 안정성과 새로운 시도와의 균형 잡힌 시도로, 유의미한 결과를 끌어내는 것을 좋아합니다.', 
      '시스템을 보수적으로 바라본다고 해서 장애나 이슈가 생기지 않는 것이 아니기에, 부하 테스트를 비롯한 다양한 테스트 환경 구성을 통해 이를 미리 대비하는 것이 중요하다고 생각합니다.'],
    },
    {
      point: '다양한 포지션 경험',
      details: ['다양한 경험을 한 분야는 게임 서버 개발, 게임 클라이언트 개발, 웹 백엔드 개발, 웹 프론트엔드 개발 등을 해왔습니다.', 
      '가장 자신 있는 분야는 소켓 서버 개발과, 최적화, 트러블 슈트, 멀티 스레드 프로그래밍입니다.',
      '다양한 경험을 바탕으로 다양한 관점에서의 접근과 시도를 통해 제너럴 리스트의 장점을 보인 경험이 많습니다.'],
    },
    {
      point: '기록 집착자',
      details: ['개발 문서, 개인 적인 취미 활동, 하루 회고, 개선안, 회의록 (개인적 차원) 등 수많은 내용을 기록하는 것이 일상입니다.', 
      '업무 관련한 기록도 작업 하나 하나 마다 남기고 관리하는 것을 선호하며, 팀이나 회사에서 강제되지 않더라도 업무 일지와 업무 관리 도구를 쓰고 관리하는 것을 즐깁니다.'],
    }
  ];

  return (
    <IntroductionContainer>
      <Typography variant="h4" gutterBottom>
        자기 소개
      </Typography>
      {introductions.map((introduction, index) => (
        <IntroductionItem key={index} {...introduction} />
      ))}
    </IntroductionContainer>
  );
};

export default Introduction;
