import TaskList from "./components/TaskList";
import "./styles.css";
import { AppBar, Container, Toolbar, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";
import { lime, grey } from "@mui/material/colors";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: grey,
    },
  });

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h2" style={{ padding: 20 }}>Task Management App</Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '40px' }}>
          <TaskList />
        </Container>
      </ThemeProvider>
    </div>
  );
}
