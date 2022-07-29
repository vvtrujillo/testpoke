import logo from './logo.svg';
import './App.css';
import { Input,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UseFetch} from './UseFetch'
import React, {useState} from 'react';


const App = () =>{

  const[url,setUr]=useState('https://pokeapi.co/api/v2/pokemon')
  const estado = UseFetch(url);
  const {cargando, data} = estado;

  cargando? console.log('cargando'):console.log(data.results);

  return(
    <div>
      <h1>Buscar Pokemon</h1>
      <div className='col-md-3'>
        <Input type='text' placeholder='ingresar nombre....'/>
        <Button type='button' className='btn btn-'>buscar</Button>
      </div>
    </div>
  )
}

export default App;
