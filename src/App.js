import React, { useState, useEffect } from "react";
import logo from "./img/stroke1.png";
//import data from "./Dashboard/data";
// import data2 from "./Dashboard/data2";
//import SingleQuestion from "./Dashboard/Question";
import ProgressTimer from "react-progress-bar-timer";
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
import Datasetone from "./Dashboard/Datasetone";
import Glucometro from "./Dashboard/Glucometro";
import Presion from "./Dashboard/Presion";
import Abcdsection from "./Dashboard/Abcdsection";
import Nihhssec from "./Dashboard/Nihhssec";

const App = () => {
  //const [questions] = useState(data);
  // const [pacientes] = useState(data2);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  let name = "Please Login";
  if (currentUser?.emailVerified) {
    const { email } = auth.currentUser;
    name = email.split("@");
    name = name[0];
  }

  window.onload = () => {
    if (localStorage.getItem("timeIdUser")) {
      alert("Session Timeout");
      localStorage.removeItem("timeIdUser");
      localStorage.removeItem("Id2User");
    }
  };
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
        <p className="username">
          Bienvenido, <b>{name}</b>
        </p>
        <br></br>
      </div>

      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <ProgressTimer
                  buttonText="Empezar Tiempo"
                  classes={{}}
                  color="hsla(248, 34%, 52%, 0.81)"
                  direction="right"
                  duration={3600}
                  fontColor=""
                  fontSize="1em"
                  label="Tiempo"
                  onFinish={function noRefCheck() {}}
                  rootRounded
                  variant="fill"
                />
                <div className="container">
                  <h3>Info. Paciente</h3>
                  <section className="info">
                    {/* {pacientes.map((paciente) => (
                      <SingleQuestion key={paciente.id} {...paciente} />
                    ))} */}
                    <Datasetone />
                    <Glucometro />
                    <Presion />
                  </section>
                  <h4></h4>
                </div>
                <main>
                  <div className="container">
                    <h3>
                      CÓDIGO RESCATE<sup>6</sup>
                    </h3>
                    <section className="info">
                      <Abcdsection />
                      <Nihhssec />
                    </section>
                  </div>
                </main>
                <button className="signout">
                  <span onClick={() => signOut(auth)}>Cerrar sesión</span>
                </button>
                <>
                  <button className="signout">
                    <span href="">Atrás</span>
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
