import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const TopicTitle = styled(Typography)`
  margin-bottom: 10px;
`;

const DescriptionText = styled(Typography)`
  margin-bottom: 15px;
`;

interface Topic {
  title: string;
  description: string;
}

interface MajorExperienceItemProps {
  title: string;
  topics: Topic[];
}

const MajorExperienceItem: React.FC<MajorExperienceItemProps> = ({ title, topics }) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {topics.map((topic, index) => (
        <Box key={index} marginBottom={2}>
          <TopicTitle variant="h6" gutterBottom>
            {topic.title}
          </TopicTitle>
          <DescriptionText variant="body1" gutterBottom>
            {topic.description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </DescriptionText>
        </Box>
      ))}
    </Box>
  );
};

export default MajorExperienceItem;
