import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Container, CssBaseline } from '@mui/material';
import Profile from './components/Profile';
import Introduction from './components/Introduction';
import Strengths from './components/Strengths';
import Education from './components/Education';
import DevToy from './components/DevToy';
import Career from './components/Career';
import MajorExperience from './components/MajorExperience';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f7f7', // 흐릿한 회색
    },
    text: {
      primary: '#333', // 진한 회색
      secondary: '#555', // 중간 회색
    },
  },
  typography: {
    fontFamily: 'Press Start 2P, Arial, sans-serif', // Press Start 2P 폰트 추가
  },
});

const App: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'my-document',
    onBeforeGetContent: () => {
      const linkStyles = `
        a {
          color: blue;
          text-decoration: underline;
        }
      `;
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.appendChild(document.createTextNode(linkStyles));
      document.head.appendChild(styleElement);

      return Promise.resolve();
    },
    onAfterPrint: () => {
      const styleElement = document.querySelector('style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div ref={componentRef}>
          <Profile />
          <Introduction />
          <Career />
          <MajorExperience />
          <Strengths />
          <DevToy />
          <Education />
        </div>
        <Button onClick={handlePrint} variant="contained" color="primary">
          Print to PDF
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
