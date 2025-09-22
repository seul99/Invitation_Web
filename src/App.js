import Main from "./pages/main";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
