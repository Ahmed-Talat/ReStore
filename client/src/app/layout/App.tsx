import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import createTheme from '@mui/material/styles/createTheme';
import { useState } from "react";
import { Route, Routes } from "react-router";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/productDetails";
import ContactPage from "../../features/Contact/ContactPage";
import HomePage from "../../features/Home/HomePage";
import Header from "./Header";


function App() {
  const [darkMode, setpaletteType] = useState(false);
  const paletteType = (darkMode ? "dark" : "light");
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212"
      }
    }
  });

  function handleThemeChanged() {
    setpaletteType(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChanged={handleThemeChanged} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
