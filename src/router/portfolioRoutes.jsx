import { Routes, Route} from "react-router";
import { PortfolioApp } from "../assets/portfolioApp";
import { lazy } from "react";


const SobreMi = lazy(() => import ("../components/sections/SobreMi").then(module=>{
  return {default:module.SobreMi}
}))
const Experiencia = lazy(() => import ("../components/sections/Experiencia").then(module=>{
  return {default:module.Experiencia}
}))
const Habilidades = lazy(() => import ("../components/sections/Habilidades").then(module=>{
  return {default:module.Habilidades}
}))
const Proyectos = lazy(() => import ("../components/sections/Proyectos").then(module=>{
  return {default:module.Proyectos}
}))
const Estudios = lazy(() => import ("../components/sections/Estudios").then(module=>{
  return {default:module.Estudios}
}))
const Arte = lazy(() => import ("../components/sections/Arte").then(module=>{
  return {default:module.Arte}
}))





export const PortfolioRoutes = () => {


  return (
    
    
      <Routes >
        <Route path="/" element={<PortfolioApp />}>
          <Route index element={<SobreMi />} /> {/* Default page */}
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="habilidades" element={<Habilidades />} />
          <Route path="educacion" element={<Estudios />} />
          <Route path="arte" element={<Arte />} />
        </Route>
      </Routes>
 
    
  );
};
