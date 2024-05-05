import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
import { IcPcBackgrStars } from "./assets/svg/index";

function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled(IcPcBackgrStars)`
  border: none;
  object-fit: cover;
`;
