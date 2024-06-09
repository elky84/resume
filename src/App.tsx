import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Container, CssBaseline, Grid } from '@mui/material';
import Profile from './components/Profile';
import Introduction from './components/Introduction';
import Strengths from './components/Strengths';
import Education from './components/Education';
import DevToy from './components/DevToy';
import Career from './components/Career';
import MajorExperience from './components/MajorExperience';
import SideBar from './components/SideBar';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f7f7',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Press Start 2P, Arial, sans-serif',
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={10}>
            <div ref={componentRef}>
              <div id="profile"><Profile /></div>
              <div id="introduction"><Introduction /></div>
              <div id="career"><Career /></div>
              <div id="majorExperience"><MajorExperience /></div>
              <div id="strengths"><Strengths /></div>
              <div id="devToy"><DevToy /></div>
              <div id="education"><Education /></div>
            </div>
            <Button onClick={handlePrint} variant="contained" color="primary">
              Print to PDF
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
