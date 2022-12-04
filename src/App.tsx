import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import Party from "./pages/Party";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/party" element={<Party />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
