import { ThemeProvider } from 'styled-components';
import theme from '../src/Styles/theme';
import { GlobalStyles } from './Styles/GlobalStyles';
import Layout from '../src/components/Layout';

const App = () => {
  return (
      <ThemeProvider theme={theme.Ligth}>
        <Layout/>
        <GlobalStyles/>
      </ThemeProvider>
  );
}

export default App;
