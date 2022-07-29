import React from "react";
import { UseFetch } from "../../UseFetch";

export const Cards = ({url}) => {
    const estado = UseFetch(url);
    const {cargando,data}=estado;
    return(
        <div>

        </div>
    )
}