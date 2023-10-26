import React, { createContext, useState, useEffect } from "react";

// Crea el contexto
export const AuthContext = createContext();

// Crea el proveedor del contexto en este caso AuthProvider
export const AuthProvider = ({ children }) => {
  const initialState = {
    displayName: "Images",
  };
  const [user, setUser] = useState(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {  
    // Verificar si el usuario está almacenado en el localStorage al cargar la página
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    // Almacenar el usuario en el localStorage
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(initialState);
    setIsLoggedIn(false);
    // Eliminar el usuario del localStorage
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
