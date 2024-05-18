import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const EducationContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <Typography variant="h4" gutterBottom>
        교육, 자격증
      </Typography>
      <Typography variant="body1">여기에 교육 및 자격증 내용을 작성하세요.</Typography>
    </EducationContainer>
  );
};

export default Education;
