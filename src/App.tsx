import { RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
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
  position: relative;

  max-width: var(--app-max-width, 375px);
  min-height: calc(var(--vh, 1vh) * 100);
  margin-right: auto;
  margin-left: auto;

  border: none;
`;
