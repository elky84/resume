import React from 'react';
import styled from 'styled-components';
import { Typography, Box, Chip, List, ListItem, ListItemText } from '@mui/material';
import ProjectItem from './ProjectItem';

const CareerItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const TagsContainer = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface CareerItemProps {
  company: string;
  position: string;
  period: string;
  techStack?: string[];
  keyIssues?: string[];
  description?: string;
  projects: {
    name: string;
    techStack?: string[];
    keyIssues?: string[];
    description: string;
    githubUrl?: string;
    youtubeUrl?: string;
  }[];
}

const CareerItem: React.FC<CareerItemProps> = ({
  company,
  position,
  period,
  techStack = undefined,
  keyIssues = undefined,
  description,
  projects,
}) => {
  return (
    <CareerItemContainer>
      <Typography variant="h4" gutterBottom>
        {company} - {position}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {period}
      </Typography>
      
      { techStack && 
      <TagsContainer>
        {techStack.map((tech, index) => (
            <Chip 
                key={index} 
                label={tech} 
                variant="outlined" 
                style={{ 
                    marginRight: 5, 
                    marginBottom: 5, 
                    backgroundColor: '#CCCCCC'
                }} 
            />
        ))}
      </TagsContainer>}

      { keyIssues && 
      <>
        <Typography variant="h6">주요 이슈:</Typography>
        <List>
            {keyIssues.map((issue, index) => (
            <ListItem key={index}>
                <ListItemText primary={issue} />
            </ListItem>
            ))}
        </List>
      </> }
      <Typography variant="body1" gutterBottom>{description}</Typography>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </CareerItemContainer>
  );
};

export default CareerItem;
