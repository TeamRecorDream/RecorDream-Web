import { RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
// import { IcPcBackgrStars } from "./assets/svg";
import theme from "./style/theme";

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  border: none;
  object-fit: cover;
`;
