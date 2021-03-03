
import React,{useState} from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState ({
        artista:'',
        cancion:''
    })

    const [error, guardarError] = useState (false);

    const {cancion, artista} = busqueda;

    //Funcion para cada input leer su contenido
    const actualizarState = e => {
        guardarBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    //Consultar a las apis
    const buscarInformacion = e => {
        e.preventDefault();
        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
            
        }
        guardarError(false);
        //Pasar al componente Principal
        guardarBusquedaLetra={busqueda}

    }
    return (
        <div className="bg-info">
            <div className="container">
            {error ? <p className="alert alert-danger text-center p-2"> Todos los Campos son Obligatorios</p> : null}
                <div className="row">
                    <form 
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2" >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            value={artista}
                                            placeholder="Nombre de Artista"
                                            onChange={actualizarState}/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            value={cancion}
                                            placeholder="Nombre de Cancion"
                                            onChange={actualizarState}/>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Formulario;