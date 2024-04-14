import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Detalles from "./Detalles";
import NotFound from "./NotFound";

//const API_URL = 'http://localhost:5144/api/peliculas';

const API_URL = 'http://localhost:3000/api/peliculas';

//GET http://localhost:5144/api/peliculas con .C#

const App = () =>
{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route  index element={<Home/>}/>
            <Route path="detalles/:id" element={<Detalles/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
export {API_URL};


