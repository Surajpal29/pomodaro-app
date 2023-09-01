import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import StateProvider from "./components/timer/StateProvider.jsx";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html, body {
  background-color:${(props) => props.theme.colors.bg};
  font-size:62.5%;
}
body{
  font-size:1.6rem;
  color: white !important;
}
`;
const theme = {
  colors: {
    primary: "#3e2b13",
    // #b85600
    secondary: "#f4c077",
    // #08002b
    bg: "#2291bf",
    // #220045
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
