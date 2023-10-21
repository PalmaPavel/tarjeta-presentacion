import React, {useState, Useeffect, useEffect} from "react";
import Usuario from "./usuario.png";
import './style.css';

function App(){

  const estilo = {
    maxWidth: '650px',
    background: 'lightGreen',
    margin: '5px',
  }

  const estilos2 = {
    textAlign: 'center'
  }

  const img = {
    maxWidth: '250px'
  }

  const[trabajadores, setTrabajadores] = useState([])

  useEffect(() =>{
    getTrabajadores()
  }, []);

  const getTrabajadores = async () =>{
    try {
      const trabajo = await fetch('https://jsonplaceholder.typicode.com/users')
      const trab = await trabajo.json()
      setTrabajadores(trab)
      console.log(trab);

    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div className="container">
      <h1 style={estilos2}>Representación de Trabajadores</h1>
      <div className="row">
        {
          trabajadores.map(item =>(
            <div className="card mb-3" style={estilo}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Usuario} className="img-fluid rounded-start" alt="..." style={img} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p className="card-text">Nombre: {item.name}</p>
                    <p className="card-text">Usuario: {item.username}</p>
                    <p className="card-text">Correo: {item.email}</p>
                    <p className="card-text">Direccion: {item.address.street}</p>
                    <p className="card-text">Calle: {item.address.suite}</p>
                    <p className="card-text">Ciudad: {item.address.city}</p>
                    <p className="card-text">codigo postal: {item.address.zipcode}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;