import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const Sidebar: React.FC = () => {
  const isMobile = () => {
    return window.innerWidth <= 600;
  };

  const [expanded, setExpanded] = useState(!isMobile());

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if(isMobile())
        setExpanded(false);
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: '10px',
        backgroundColor: 'white',
        padding: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: expanded ? '120px' : '85px',
        transition: 'width 0.3s ease-in-out',
        '@media (min-width: 600px)': {
          width: '120px',
          visibility: 'visible',
        },
        '@media (max-width: 600px)': {
          visibility: 'visible',
        },
      }}
    >
      {expanded && (
        <>
          <Button onClick={() => scrollToSection("profile")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            프로필
          </Button>
          <Button onClick={() => scrollToSection("introduction")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            소개
          </Button>
          <Button onClick={() => scrollToSection("career")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            커리어
          </Button>
          <Button onClick={() => scrollToSection("majorExperience")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            주요 업무 경험
          </Button>
          <Button onClick={() => scrollToSection("strengths")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            강점
          </Button>
          <Button onClick={() => scrollToSection("devToy")} variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
            Dev Toy
          </Button>
          <Button onClick={() => scrollToSection("education")} variant="contained" color="primary" fullWidth sx={{ fontSize: '10px' }}>
            교육
          </Button>             
        </>
      )}
      {isMobile() && (
        <Button onClick={toggleSidebar} variant="contained" color={expanded ? "secondary" : "primary"} fullWidth sx={{ fontSize: '10px', marginTop: '5px' }}>
          {expanded ? '접기' : '바로가기'}
        </Button>
      )}
    </Box>
  );
};

export default Sidebar;