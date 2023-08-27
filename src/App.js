import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import {AboutLafoca} from "./components/AboutLafoca";
import { OurTeam } from "./components/OurTeam";

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
      <OurTeam/>
    </div>
      
    </>

  );
}

export default App;
