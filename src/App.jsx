import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import createTheme from '../src/styles/theme';
import Routes from './routes';
import React from 'react';

const App = () => {
  const theme = createTheme('ligth')

  return (
      <ThemeProvider theme={theme}>
        <Routes/>
        <GlobalStyles/>
      </ThemeProvider>
  );
}

export default App;
