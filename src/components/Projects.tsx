import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import ProjectItem from './ProjectItem';

const ProjectsContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Projects: React.FC = () => {
  const projects = [
    {
      period: '2022.01 - 2022.12',
      techStack: 'React, TypeScript',
      projectName: '프로젝트 X',
      position: '프론트엔드 개발자',
      details: [
        '프로젝트 설명 1',
        '프로젝트 설명 2',
        '프로젝트 설명 3',
      ],
    },
    {
      period: '2021.01 - 2021.12',
      techStack: 'Vue, JavaScript',
      projectName: '프로젝트 Y',
      position: '프론트엔드 개발자',
      details: [
        '프로젝트 설명 1',
        '프로젝트 설명 2',
        '프로젝트 설명 3',
      ],
    },
  ];

  return (
    <ProjectsContainer>
      <Typography variant="h4" gutterBottom>
        프로젝트 경험
      </Typography>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
