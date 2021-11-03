import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import createTheme from '@mui/material/styles/createTheme';
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
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
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
