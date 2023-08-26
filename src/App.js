import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import {AboutLafoca} from "./components/AboutLafoca";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
    <div className="content-body">
      <Banner />
      <AboutLafoca />
    </div>
      
    </>

  );
}

export default App;
