import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
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
   
    <div className="content-body">
       <Banner />
      
    </div>
        <AboutLafoca />
        <OurTeam/>
        <Projects/>
        <Results/>
        <Footer/>
    </>

  );
}

export default App;
