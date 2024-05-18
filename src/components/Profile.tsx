import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography, Link, Box } from '@mui/material';

const ProfileContainer = styled(Box)`
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  color: #fff;
  &:hover {
    color: #ccc;
  }
`;

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <Avatar
        alt="Profile"
        src="your-photo-url.jpg"
        sx={{ width: 100, height: 100, margin: 'auto' }}
      />
      <Typography variant="h6">your-email@example.com</Typography>
      <Typography variant="h6">
        Blog: <StyledLink href="your-blog-url">your-blog-url</StyledLink>
      </Typography>
      <Typography variant="h6">
        GitHub: <StyledLink href="https://github.com/your-github">github.com/your-github</StyledLink>
      </Typography>
    </ProfileContainer>
  );
};

export default Profile;
