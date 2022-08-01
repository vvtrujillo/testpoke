import React from "react";
import { UseFetch } from "../../UseFetch";
import { CardPokemon } from "./CardPokemon";

export const Cards = ({results}) => {
    const estado = UseFetch(url);
    const {cargando,data}=estado;
    return(
        <div className="container">

        </div>
    )
}