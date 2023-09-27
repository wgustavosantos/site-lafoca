import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Header";
import {AboutLafoca} from "./components/AboutLafoca";
import { OurTeam } from "./components/OurTeam";
import Projects from "./components/Projects";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import NovoEstudante from "./components/novoEstudante";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novo-estudante/:estudanteId?" element={<NovoEstudante />} />
        <Route path="/admin" element ={<Login/>} />
        <Route path="/dashboard/:lastPage?" element={<Dashboard/>} />
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
