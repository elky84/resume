import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const DevToyContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const DevToy: React.FC = () => {
  return (
    <DevToyContainer>
      <Typography variant="h4" gutterBottom>
        Dev Toy
      </Typography>
      <Typography variant="body1">여기에 Dev Toy 내용을 작성하세요.</Typography>
    </DevToyContainer>
  );
};

export default DevToy;
