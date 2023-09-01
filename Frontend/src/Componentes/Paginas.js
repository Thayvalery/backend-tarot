/*encargado de enrutar */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'boxicons';
import Inicio from "./Inicio";
import { Productos } from "./Productos";
import  FormuModal  from "./FormuModal";
import FormuContainer from "./FormuContainer";
import  Footer  from "./Footer";
import {FormularioSuscribete} from "./FormularioSuscribete";



export const Paginas = () => {
  return (

    <>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/formulario" element={<FormularioSuscribete />} />
    </Routes>
    <FormuContainer/>
    <FormuModal />
    <Footer/>
    </>

  );
}


export default Paginas;
