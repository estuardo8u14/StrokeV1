import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Auth/firebase";

import "./estilos.css";

const Lista = () => {
  const [users, setUsers] = useState([{ Nombre: "Loading...", id: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="container">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href="#">Editar </a>
            <p>Nombre: {user.Nombre}</p>
            <p>Edad: {user.Edad}</p>
            <p>Riesgo: {user.Riesgo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
