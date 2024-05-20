import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import EducationItem from './EducationItem';

const EducationContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Education: React.FC = () => {
  const educations = [
    {
      institution: '한국 방송 통신 대학교',
      degree: '컴퓨터공학 학사',
      period: '📅 2009-03~2012-02'
    },
    {
      institution: '경기 과학 기술 대학교',
      degree: '컴퓨터공학 전문학사',
      period: '📅 2003-03~2006-02'
    },
  ];

  return (
    <EducationContainer>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      {educations.map((education, index) => (
        <EducationItem key={index} {...education} />
      ))}
    </EducationContainer>
  );
};

export default Education;
