import React from 'react';
import { Button, Box } from '@mui/material';

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        padding: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: '120px',
        '@media (max-width: 600px)': {
          width: '60px',
        },
      }}
    >
      <Button href="#profile" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        프로필
      </Button>
      <Button href="#introduction" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        소개
      </Button>
      <Button href="#career" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        커리어
      </Button>
      <Button href="#majorExperience" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        주요 업무 경험
      </Button>
      <Button href="#strengths" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        강점
      </Button>
      <Button href="#devToy" variant="contained" color="primary" fullWidth sx={{ mb: 1, fontSize: '10px' }}>
        Dev Toy
      </Button>
      <Button href="#education" variant="contained" color="primary" fullWidth sx={{ fontSize: '10px' }}>
        교육
      </Button>
    </Box>
  );
};

export default Sidebar;
