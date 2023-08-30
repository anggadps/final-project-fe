import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "montserrat",
  },
  palette: {
    primary: {
      main: "#FABC1D",
    },
    secondary: {
      main: "#5B4947",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
