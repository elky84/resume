import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import ExperienceItem from './ExperienceItem';

const ExperienceContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2021.01 - 2022.12',
      techStack: 'React, TypeScript',
      projectName: '프로젝트 A',
      position: '프론트엔드 개발자',
      details: [
        '업무 포지션 설명 1',
        '업무 포지션 설명 2',
        '업무 포지션 설명 3',
      ],
    },
    {
      period: '2019.01 - 2020.12',
      techStack: 'Vue, JavaScript',
      projectName: '프로젝트 B',
      position: '프론트엔드 개발자',
      details: [
        '업무 포지션 설명 1',
        '업무 포지션 설명 2',
        '업무 포지션 설명 3',
      ],
    },
  ];

  return (
    <ExperienceContainer>
      <Typography variant="h4" gutterBottom>
        주요 업무 경험
      </Typography>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
