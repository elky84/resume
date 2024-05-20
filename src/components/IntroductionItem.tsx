import React from 'react';
import styled from 'styled-components';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const IntroductionItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

interface IntroductionItemProps {
  point: string;
  details: string[];
}

const IntroductionItem: React.FC<IntroductionItemProps> = ({ point, details }) => {
  return (
    <IntroductionItemContainer>
      <Typography variant="h5" gutterBottom>
        {point}
      </Typography>
      <List>
        {details.map((detail, index) => (
          <ListItem key={index}>
            <ListItemText primary={detail} />
          </ListItem>
        ))}
      </List>
    </IntroductionItemContainer>
  );
};

export default IntroductionItem;
