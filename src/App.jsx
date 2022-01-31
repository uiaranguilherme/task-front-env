import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Styles/GlobalStyles';
import theme from '../src/Styles/theme';
import Layout from '../src/components/Layout';
import './Styles/StylesGlobal.css';

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Layout/>
        <GlobalStyles/>
      </ThemeProvider>
  );
}

export default App;
