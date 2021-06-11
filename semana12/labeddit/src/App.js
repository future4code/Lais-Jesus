import logo from './logo.svg';
import theme from './constants/theme'
import './App.css';
import Router from "./routes/Router"
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
