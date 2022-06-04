import React, { useState, useEffect } from "react";
import logo from "./img/stroke1.png";
import data from "./Dashboard/data";
import data2 from "./Dashboard/data2";
import SingleQuestion from "./Dashboard/Question";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Auth/Register";
import VerifyEmail from "./Auth/VerifyEmail";
import Login from "./Auth/Login";
import { AuthProvider } from "./Auth/AuthContext";
import { auth } from "./Auth/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./Auth/PrivateRoute";
import { Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Lista from "./Dashboard/Lista";
import Landing from "./Landing/Landing";
import Abcd from "./Scores/ABCD/Abcd";

const App = () => {
  const [questions] = useState(data);
  const [pacientes] = useState(data2);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <div>
        <a
          className="App-logo"
          href="/Landing"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="Stroke Logo" />
        </a>
      </div>

      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <div className="container">
                  <h3>Info. Paciente</h3>
                  <section className="info">
                    {pacientes.map((paciente) => (
                      <SingleQuestion key={paciente.id} {...paciente} />
                    ))}
                  </section>
                  <h4>Paciente: Juan Lopez Rodriguez</h4>
                </div>
                <main>
                  <div className="container">
                    <h3>Marcar Respuestas para obtener resultados</h3>
                    <section className="info">
                      {questions.map((question) => (
                        <SingleQuestion key={question.id} {...question} />
                      ))}
                    </section>
                  </div>
                </main>
                <button className="signout">
                  <span onClick={() => signOut(auth)}>Cerrar sesión</span>
                </button>
                <>
                  <button className="signout">
                    <span onClick={""}>Atrás</span>
                  </button>
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              !currentUser?.emailVerified ? (
                <Login />
              ) : (
                <Navigate to="/Home" replace />
              )
            }
          />

          <Route
            path="/register"
            element={
              !currentUser?.emailVerified ? (
                <Register />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/ABCD" element={<Abcd />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
