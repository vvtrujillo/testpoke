import React, { useState } from "react";
import { UseFetch } from "./UseFetch";
import { Cards } from "./Componente/Cards/Cards";
import {h1} from 'reactstrap';

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const estado = UseFetch(url);
    const {cargando, data} = estado;
    cargando? console.log('cargando') : console.log(data.results);
    
    return(
        <div>
            <h1>Esta es la página de Pokemon</h1>
            {
                cargando
                ?
                <h1>Cargando....</h1>
                :
                <Cards results={data.results}></Cards>
            }
        </div>
    )
}