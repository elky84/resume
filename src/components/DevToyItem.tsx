import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Box, Link, Chip, Modal } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GetAppIcon from '@mui/icons-material/GetApp';
import nugetIcon from '../icon/nuget.png';

const DevToyItemContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const DescriptionText = styled(Typography)`
  margin-bottom: 15px;
`;

const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const NuGetIcon = styled('img')`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const ScreenshotContainer = styled(Box)`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 10px;
`;

const Screenshot = styled('img')`
  height: 100px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ModalImage = styled('img')`
  width: 80%;
  height: auto;
  margin: auto;
  display: block;
`;

interface DevToyItemProps {
  title: string;
  description: string;
  githubUrl?: string;
  youtubeUrls?: { name: string; url: string }[];
  downloadUrls?: { windows?: string; android?: string }[];
  techStack: string[];
  nugetUrl?: string;
  screenShots?: string[];
}

const DevToyItem: React.FC<DevToyItemProps> = ({
  title,
  description,
  githubUrl,
  youtubeUrls,
  downloadUrls,
  techStack,
  nugetUrl,
  screenShots
}) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <DevToyItemContainer>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <DescriptionText variant="body1" gutterBottom>
        {description.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </DescriptionText>
      {githubUrl && (
        <IconLink href={githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ marginRight: '5px' }} />
          {githubUrl}
        </IconLink>
      )}
      {youtubeUrls && youtubeUrls.length > 0 && (
        <Box mt={1}>
          {youtubeUrls.map((item, index) => (
            <IconLink key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon style={{ marginRight: '5px' }} />
              {item.name}
            </IconLink>
          ))}
        </Box>
      )}
      {downloadUrls && downloadUrls.length > 0 && (
        <Box mt={1}>
          {downloadUrls.map((item, index) => (
            <React.Fragment key={index}>
              {item.windows && (
                <IconLink href={item.windows} target="_blank" rel="noopener noreferrer">
                  <GetAppIcon style={{ marginRight: '5px' }} />
                  windows
                </IconLink>
              )}
              {item.android && (
                <IconLink href={item.android} target="_blank" rel="noopener noreferrer">
                  <GetAppIcon style={{ marginRight: '5px' }} />
                  android
                </IconLink>
              )}
            </React.Fragment>
          ))}
        </Box>
      )}
      {nugetUrl && (
        <IconLink href={nugetUrl} target="_blank" rel="noopener noreferrer">
          <NuGetIcon src={nugetIcon} alt="NuGet Icon" />
          {nugetUrl}
        </IconLink>
      )}
      {screenShots && screenShots.length > 0 && (
        <ScreenshotContainer>
          {screenShots.map((image, index) => (
            <Screenshot
              key={index}
              src={process.env.PUBLIC_URL + image}
              alt={`Screenshot ${index + 1}`}
              onClick={() => handleOpen(process.env.PUBLIC_URL + image)}
            />
          ))}
        </ScreenshotContainer>
      )}
      {techStack.length > 0 && (
        <Box mt={2} display="flex" alignItems="center">
          <Typography variant="subtitle1" gutterBottom style={{ marginRight: '8px' }}>
            기술 스택:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {techStack.map((tech, index) => (
              <Chip key={index} label={tech} />
            ))}
          </Box>
        </Box>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <ModalImage src={selectedImage} alt="Selected Screenshot" />
        </Box>
      </Modal>
    </DevToyItemContainer>
  );
};

export default DevToyItem;
