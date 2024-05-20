import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography, Link, Box } from '@mui/material';
import { GitHub, Email, Language } from '@mui/icons-material';

const ProfileContainer = styled(Box)`
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const HighlightedName = styled.span`
  color: #1976d2;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:hover {
    color: #d32f2f;
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
      <Typography variant="h5">
        개발을 즐기는 개발자, 개선을 좋아하는 개발자 <HighlightedName>김성훈</HighlightedName>입니다.
      </Typography>
      <Typography variant="h6">
        <StyledLink href="mailto:elky84@gmail.com"><Email /> elky84@gmail.com</StyledLink>
      </Typography>
      <Typography variant="h6">
        <StyledLink href="your-blog-url"><Language /> https://elky84.github.io</StyledLink>
      </Typography>
      <Typography variant="h6">
        <StyledLink href="https://github.com/elky84"><GitHub /> github.com/elky84</StyledLink>
      </Typography>
    </ProfileContainer>
  );
};

export default Profile;
