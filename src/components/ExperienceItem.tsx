import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const ExperienceItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

interface ExperienceItemProps {
  period: string;
  techStack: string;
  projectName: string;
  position: string;
  details: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ period, techStack, projectName, position, details }) => {
  return (
    <ExperienceItemContainer>
      <Typography variant="h5" gutterBottom>
        {projectName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        기간: {period}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        기술 스택: {techStack}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        포지션: {position}
      </Typography>
      <Typography variant="body1">
        {details.map((detail, index) => (
          <Box key={index} component="li" marginLeft={2}>
            {detail}
          </Box>
        ))}
      </Typography>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
