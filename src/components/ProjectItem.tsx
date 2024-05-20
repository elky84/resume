import React from 'react';
import styled from 'styled-components';
import { Typography, Box, Chip, Link, List, ListItem, ListItemText } from '@mui/material';

const ProjectItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #DDDDDD;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;


const TagsContainer = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface ProjectItemProps {
  name: string;
  techStack?: string[];
  keyIssues?: string[];
  description: string;
  githubUrl?: string;
  youtubeUrl?: string;
  siteUrl?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, techStack = undefined, keyIssues = undefined, description, githubUrl, youtubeUrl, siteUrl }) => {
  return (
    <ProjectItemContainer>
      <Typography variant="h5" gutterBottom>
        {name}
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
                backgroundColor: '#BBBBBB'
            }} 
        />
        ))}
      </TagsContainer>
      }

      <Typography variant="body1" gutterBottom>{description}</Typography>
      <br/>
      
      {keyIssues && 
        <>
          <Typography variant="h5">주요 이슈:</Typography>
          <List>
            {keyIssues.map((issue, index) => (
              <ListItem key={index}>
                <ListItemText>
                  {issue.split('\n').map((text, i) => (
                    <React.Fragment key={i}>
                      {i === 0 ? <Typography variant="h6" gutterBottom>{text}</Typography> : <React.Fragment>{'\t- '}{text}<br /></React.Fragment>}
                    </React.Fragment>
                  ))}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      }

      {githubUrl && (
        <Typography variant="body2">
          GitHub: <Link href={githubUrl} target="_blank" rel="noopener noreferrer">{githubUrl}</Link>
        </Typography>
      )}
      {youtubeUrl && (
        <Typography variant="body2">
          YouTube: <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">{youtubeUrl}</Link>
        </Typography>
      )}

      {siteUrl && (
        <Typography variant="body2">
          Site: <Link href={siteUrl} target="_blank" rel="noopener noreferrer">{siteUrl}</Link>
        </Typography>
      )}

    </ProjectItemContainer>
  );
};

export default ProjectItem;
