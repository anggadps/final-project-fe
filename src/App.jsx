import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreatePassword from "./Pages/CreatePassword/CreatePassword";
import MenuClass from "./Pages/MenuClass/MenuClass";
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
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpassword" element={<CreatePassword />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/menuclass" element={<MenuClass />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
