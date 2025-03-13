import "./App.scss";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Box component="header">
          <Header />
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <PublicRoutes />
        </Box>
        <Box component="footer">
          <Footer />
        </Box>
      </Container>
    </>
  );
}

export default App;
