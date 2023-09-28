import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreatePassword from "./Pages/CreatePassword/CreatePassword";
import MyClass from "./Pages/MyClass/MyClass";
import MenuClass from "./Pages/MenuClass/MenuClass";
import Cart from "./Pages/Cart/Cart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";
import Detail from "./Pages/Detail/Detail";

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpassword" element={<CreatePassword />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/menuclass/:id" element={<MenuClass />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/myclass" element={<MyClass />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
