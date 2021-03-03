import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import axios from 'axios';

function App() {
  const [busquedaLetra, guardarBusquedaLetra] = useState ({})

useEffect(() => {
  if(Object.keys(busquedaLetra).length = 0) return;

  const consultarApiLetra = async () => {
    const {artista, cancion} = busquedaLetra
    const url = ` https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    const resultado = await axios(url);
    console.log(resultado);
  }
}, [busquedaLetra]);

  return (
    
    <Fragment>
      <Formulario
      guardarBusquedaLetra={guardarBusquedaLetra}  />
    </Fragment> 
  )
    
}

export default App;
