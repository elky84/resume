import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const StrengthsContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Strengths: React.FC = () => {
  return (
    <StrengthsContainer>
      <Typography variant="h4" gutterBottom>
        강점
      </Typography>
      <Typography variant="body1">여기에 강점 내용을 작성하세요.</Typography>
    </StrengthsContainer>
  );
};

export default Strengths;
