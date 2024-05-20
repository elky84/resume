import React from 'react';
import styled from 'styled-components';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const EducationItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, period, details }) => {
  return (
    <EducationItemContainer>
      <Typography variant="h5" gutterBottom>
        {degree}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {institution} - {period}
      </Typography>
      
      { details && 
        <List>
        {details.map((detail, index) => (
            <ListItem key={index}>
            <ListItemText primary={detail} />
            </ListItem>
        ))}
        </List>
      }
    </EducationItemContainer>
  );
};

export default EducationItem;
