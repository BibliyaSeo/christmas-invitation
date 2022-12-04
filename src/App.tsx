import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Main from "./pages/Main";
import Party from "./pages/Party";
import Plan from "./pages/Plan";
import Place from "./pages/Place";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/party" element={<Party />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
