import React from 'react';
import styled from 'styled-components';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const StrengthItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

interface StrengthItemProps {
  title: string;
  details: string[];
}

const StrengthItem: React.FC<StrengthItemProps> = ({ title, details }) => {
  return (
    <StrengthItemContainer>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <List>
        {details.map((detail, index) => (
          <ListItem key={index}>
            {index === 0 ? (
              <Typography variant="h6" gutterBottom>
                {detail}
              </Typography>
            ) : (
              <React.Fragment>
                <ListItemText primary={`\t- ${detail}`} />
              </React.Fragment>
            )}
          </ListItem>
        ))}
      </List>
    </StrengthItemContainer>
  );
};

export default StrengthItem;
