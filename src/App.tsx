import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteSoftware } from "./routes";

export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteSoftware />
    </BrowserRouter>
  )
}