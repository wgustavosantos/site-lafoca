import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Header";
import {AboutLafoca} from "./components/AboutLafoca";
import { OurTeam } from "./components/OurTeam";
import Projects from "./components/Projects";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";

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
   
    {/* <div className="content-body"></div> */}
       <Banner />
        <AboutLafoca />
        <OurTeam/>
        <Projects/>
        <Results/>
        <Footer/>
    </>

  );
}

export default App;
