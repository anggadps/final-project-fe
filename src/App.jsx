import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Invoice from "./Pages/Invoice/Invoice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";
import Detail from "./Pages/Detail/Detail";
import DetailInvoice from "./Pages/DetailInvoice/DetailInvoice";
import SuccessPurchase from "./Pages/SuccessPurchase/SuccessPurchase";
import SuccessRegister from "./Pages/SuccessRegister/SuccessRegister";
import Layout from "./admin/Layout/Layout";
import Dashboard from "./admin/Dashboard/Dashboard";
import Course from "./admin/Course/Course";

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
    error: {
      main: "#F44336",
    },
  },
});

function App() {
  const location = useLocation();

  // Check if the current route is in the admin section
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {!isAdminRoute && <Navbar />}
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
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/detail-invoice/:id" element={<DetailInvoice />} />
            <Route path="/success-purchase" element={<SuccessPurchase />} />
            <Route path="/success-register" element={<SuccessRegister />} />
          </Routes>
          {!isAdminRoute && <Footer />}
        </AuthProvider>

        <Routes>
          <Route path="/admin/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="course" element={<Course />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
