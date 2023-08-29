import './App.css';
import Navbar from './components/Navbar';
import Login from './Login/Login';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FABC1D"
    },
    secondary: {
      main: "#5B4947"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
