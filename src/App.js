import logo from './logo.svg';
import './App.css';
import { Input,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UseFetch} from './UseFetch'
import React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import { Cards } from "./Componente/Cards/Cards";


const App = () =>{

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const estado = UseFetch(url);
    const {cargando, data} = estado;
    cargando? console.log('cargando') : console.log(data.results);

  return(
    <div className='container'>
      <h1>Buscar Pokemon</h1>
      <hr></hr>
      <div className='col-md-3'>
        <Input type='text' placeholder='ingresar nombre....'/>
        <Button type='button' className='' color='primary'>buscar</Button>
        <div>
            <h1>Pokemón</h1>
            {
                cargando
                ?
                <h1>Cargando....</h1>
                :
                <Cards results={data.results}></Cards>
            }
        </div>
      </div>
    </div>
  )
}

export default App;
