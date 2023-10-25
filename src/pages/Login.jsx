import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ setShowNav }) => {
  const [name, setName] = useState('')
  const location = useLocation();
  if (location.pathname == "/Login") {
    setShowNav(false);
  }
  console.log(location.pathname);
  const NameFunction = ({target}) =>{
    console.log(target.value)
    setName(target.value)
  } 
  const user = {
    name,
    lastName: 'De la Hoz'
  }

  const LocalUser = JSON.parse(localStorage.getItem("User"))
  console.log(LocalUser)
  return (
    <>
      <div className="containerLogin">
        <div className="containerFormLogin">
          <input type="text" placeholder="Nombre" onChange={NameFunction} value={name}/>
          <input type="text" placeholder="Contraseña" />
          <button onClick={() => localStorage.setItem("User", JSON.stringify(user))}>
            Crear
          </button>
          <button onClick={() => console.log(localStorage.getItem("User"))}>
            Ver
          </button>
          {
            localStorage.getItem("User") ? LocalUser.name : 'No Existe'
          }
          <button onClick={() => localStorage.removeItem('User')}>Delete</button>
        </div>

        <div>Imh</div>
      </div>
    </>
  );
};

export default Login;
