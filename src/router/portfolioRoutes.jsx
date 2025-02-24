import { Routes, Route } from "react-router";
import { SobreMi } from "../components/sections/SobreMi";
import { Experiencia } from "../components/sections/Experiencia";
import { Proyectos } from "../components/sections/Proyectos";
import { Habilidades } from "../components/sections/Habilidades";
import { Estudios } from "../components/sections/Estudios";
import { Arte } from "../components/sections/Arte";
import { PortfolioApp } from "../assets/portfolioApp";

export const PortfolioRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<PortfolioApp/>}/>
            <Route path="/sobre-mi" element={<SobreMi/>}/>
            <Route path="/experiencia" element={<Experiencia/>}/>
            <Route path="/proyectos" element={<Proyectos/>}/>
            <Route path="/habilidades" element={<Habilidades/>}/>
            <Route path="/educacion" element={<Estudios/>}/>
            <Route path="/arte" element={<Arte/>}/>
        </Routes>
  )
}
