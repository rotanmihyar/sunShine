import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
export default function Header() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container className="HeaderContainer">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,

                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Avatar
                variant={"rounded"}
                alt="The image"
                src="https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
