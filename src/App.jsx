import './App.css';
import Navbar from './components/Navbar';
import Register from './Pages/Register'
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
        <Register />
      </div>
    </ThemeProvider>
  );
}

export default App;
