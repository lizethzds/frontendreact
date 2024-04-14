import { useState, useEffect } from "react";
import PeliculaCard from "./PeliculaCard";
import { useParams } from "react-router-dom";
import { API_URL } from "./App";

const Detalles = () =>{

    const {id} = useParams();
    const [pelicula, setPelicula] = useState();

    const buscaPelicula = async (id) =>{
        let data = null;
        const response = await fetch(`${API_URL}/${id}`)
        if(response.ok)
        data = await response.json();

        setPelicula(data);
    }

    useEffect(()=>{
        buscaPelicula(id);
    },[id])



    return (
       <>
        {(pelicula != null)
            ?(
                <div className="container">
                    <PeliculaCard pelicula={pelicula} key={pelicula.peliculaId}/>
                    <div className="movie-desc">{pelicula.sinopsis}</div>
                </div>
            ):
            (
                    <div className="empty">
                        <h2>No hay peliculas encontradas</h2>
                    </div>
            )

        }
       </>
    )
}

export default Detalles;