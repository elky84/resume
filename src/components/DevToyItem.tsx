import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Box, Link, Chip, Modal } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
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

const EmbedMediaContainer = styled(Box)`
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

const ModalContent = styled(Box)`
  width: 90%;
  max-width: 1200px;
  aspect-ratio: 16 / 10;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const ModalMediaWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  z-index: 1001; /* 모달 위로 배치하여 iframe 이벤트를 가리도록 함 */
`;

const ModalImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const YouTubeThumbnailContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YouTubeThumbnail = styled('img')`
  height: 140px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ThumbnailTextContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const ThumbnailText = styled(Typography)`
  text-align: center;
  font-size: 0.7rem !important;
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
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string }>({ type: 'image', src: '' });

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleThumbnailClick = (url: string) => {
    setSelectedMedia({ type: 'video', src: url });
    setOpen(true);
  };

  const handleScreenshotClick = (url: string) => {
    setSelectedMedia({ type: 'image', src: url });
    setOpen(true);
  };

  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|youtube.com\/user\/\w#p\/\w\/\w\/|youtu.be\/\?t=|watch\?t=|&t=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

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
        <EmbedMediaContainer>
          {youtubeUrls.map((item, index) => (
            <YouTubeThumbnailContainer key={index}>
              <YouTubeThumbnail
                src={`https://img.youtube.com/vi/${extractVideoId(item.url)}/0.jpg`}
                alt={item.name}
                onClick={() => handleThumbnailClick(item.url)}
              />
              <ThumbnailTextContainer>
                <YouTubeIcon color="error" fontSize="small" />
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <ThumbnailText>{item.name}</ThumbnailText>
                </Link>
              </ThumbnailTextContainer>
              </YouTubeThumbnailContainer>
          ))}
        </EmbedMediaContainer>
      )}
      {downloadUrls && downloadUrls.length > 0 && (
        <Box mt={1}>
          {downloadUrls.map((item, index) => (
            <React.Fragment key
            ={index}>
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
      <EmbedMediaContainer>
        {screenShots.map((image, index) => (
          <Screenshot
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Screenshot ${index + 1}`}
            onClick={() => handleScreenshotClick(process.env.PUBLIC_URL + image)}
          />
        ))}
      </EmbedMediaContainer>
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropProps={{
        onClick: () => handleClose(), // 배경 클릭 시 모달이 닫히도록 함
        sx: { zIndex: 1000 },
      }}
    >
      <ModalMediaWrapper onClick={handleModalClick}> {/* 모달 클릭 시 닫히도록 함 */}
        <ModalContent>
          {selectedMedia.type === 'image' ? (
            <ModalImage src={selectedMedia.src} alt="Selected Screenshot" />
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${extractVideoId(selectedMedia.src)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
              style={{ zIndex: 999 }}
            ></iframe>
          )}
        </ModalContent>
      </ModalMediaWrapper>
    </Modal>
  </DevToyItemContainer>
);
};

export default DevToyItem;
