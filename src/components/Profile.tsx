import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography, Link, Box } from '@mui/material';
import { GitHub, Email, Language, Note, StickyNote2 } from '@mui/icons-material';

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
  display: inline-flex;
  align-items: center;
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
        src={`${process.env.PUBLIC_URL}/elky.png`}
        sx={{ 
          width: 150, 
          height: 150, 
          margin: 'auto', 
          border: '2px solid gray'
        }}
      />
      <Typography variant="h5">
        개발을 즐기는 개발자, 개선을 좋아하는 개발자 <HighlightedName>김성훈</HighlightedName>입니다.
      </Typography>
      <Typography variant="h6">
        <Email /> 이메일: <StyledLink href="mailto:elky84@gmail.com">elky84@gmail.com</StyledLink>
      </Typography>
      <Typography variant="h6">
        <Note /> 이력서: <StyledLink href="https://elky84.github.io/resume">https://elky84.github.io/resume </StyledLink>
      </Typography>
      <Typography variant="h6">
        <StickyNote2 /> 포트폴리오: <StyledLink href="https://elky84.github.io/portfolio">https://elky84.github.io/portfolio </StyledLink>
      </Typography>
      <Typography variant="h6">
        <Language /> 블로그: <StyledLink href="https://elky84.github.io">https://elky84.github.io</StyledLink>
      </Typography>
      <Typography variant="h6">
        <GitHub /> Github: <StyledLink href="https://github.com/elky84"> https://github.com/elky84</StyledLink>
      </Typography>
    </ProfileContainer>
  );
};

export default Profile;
