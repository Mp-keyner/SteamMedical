import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const BtnGoogle = () => {
  const navigate = useNavigate();
  const { login, setUser } = useContext(AuthContext); // Obtén setIsLoggedIn y setUser del contexto

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        login(user); // Cambia el estado de isLoggedIn a true
        navigate("/Main");
      })
      .catch((error) => {
        // Error al iniciar sesión con Google
        toast.error("Error al iniciar sesión con Google" + error);
      });
  };

  return (
    <>
      <button onClick={signInWithGoogle} className="buttonGoogle">
        Iniciar sesión con Google
      </button>
    </>
  );
};

export default BtnGoogle;
