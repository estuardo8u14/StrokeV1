import React, { useState, useEffect } from "react";
import "./questions.css";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

import FormHelperText from "@mui/material/FormHelperText";
import Nihhs1 from "../Scores/NIHHS/Nihhs1";
import Nihhs2 from "../Scores/NIHHS/Nihhs2";
import Nihhs3 from "../Scores/NIHHS/Nihhs1";
import Nihhs4 from "../Scores/NIHHS/Nihhs2";
import Nihhs5 from "../Scores/NIHHS/Nihhs1";
import Nihhs6 from "../Scores/NIHHS/Nihhs2";
import Nihhs7 from "../Scores/NIHHS/Nihhs1";
import Nihhs8 from "../Scores/NIHHS/Nihhs2";
import Nihhs9 from "../Scores/NIHHS/Nihhs1";
import Nihhs10 from "../Scores/NIHHS/Nihhs2";
import Nihhs11 from "../Scores/NIHHS/Nihhs1";
import Nihhs12 from "../Scores/NIHHS/Nihhs2";
import Nihhs13 from "../Scores/NIHHS/Nihhs1";
import Nihhs14 from "../Scores/NIHHS/Nihhs2";
import Nihhs15 from "../Scores/NIHHS/Nihhs1";
import OutlinedButtons1 from "../Scores/NIHHS/Nihhsbutt";

import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";

const Abcd = () => {
  // const [Isloading, setIsloading] = useState(false);
  const [Nivel, setNivel] = useState(0);
  const [Preguntas, setPreguntas] = useState(0);
  const [Ordenes, setOrdenes] = useState(0);
  const [Mirada, setMirada] = useState(0);
  const [Campos, setCampos] = useState(0);
  const [Paresia, setParesia] = useState(0);
  const [MotorMsDer, setMotorMsDer] = useState(0);
  const [MotorMsizq, setMotorMsizq] = useState(0);
  const [MotorMiDer, setMotorMiDer] = useState(0);
  const [MotorMiizq, setMotorMiizq] = useState(0);
  const [Ataxia, setAtaxia] = useState(0);
  const [Sensibilidad, setSensibilidad] = useState(0);
  const [Lenguaje, setLenguaje] = useState(0);
  const [Disartria, setDisartria] = useState(0);
  const [Extincion, setExtincion] = useState(0);

  const [resultC, setresultC] = useState(0);
  const [Isloading, setIsloading] = useState(false);
  const { email } = auth.currentUser;
  const myData = {
    Nivel: Nivel,
    Preguntas: Preguntas,
    Ordenes: Ordenes,
    Mirada: Mirada,
    Campos: Campos,
    Paresia: Paresia,
    MotorMsDer: MotorMsDer,
    MotorMsizq: MotorMsizq,
    MotorMiDer: MotorMiDer,
    MotorMiizq: MotorMsizq,
    Ataxia: Ataxia,
    Lenguaje: Lenguaje,
    Sensibilidad: Sensibilidad,
    Disartria: Disartria,
    Extincion: Extincion,
    resultC: resultC,
  };

  const [boxShowclass, setboxShowclass] = useState("dnone");
  const shoenHideBox = () => {
    //console.log(auth.currentUser)
    if (boxShowclass === "dnone") {
      setboxShowclass("dshow");
    } else {
      setboxShowclass("dnone");
    }
  };
  useEffect(() => {
    let resis =
      parseInt(Nivel) +
      parseInt(Preguntas) +
      parseInt(Ordenes) +
      parseInt(Campos) +
      parseInt(Paresia) +
      parseInt(MotorMsDer) +
      parseInt(MotorMsizq) +
      parseInt(Ataxia) +
      parseInt(Lenguaje) +
      parseInt(Sensibilidad) +
      parseInt(Disartria) +
      parseInt(Extincion) +
      parseInt(MotorMiDer) +
      parseInt(MotorMiizq) +
      parseInt(Mirada);
    setresultC(resis);
  }, [
    Mirada,
    Nivel,
    Preguntas,
    Ordenes,
    Campos,
    Paresia,
    MotorMsDer,
    MotorMsizq,
    Ataxia,
    Lenguaje,
    Sensibilidad,
    Disartria,
    Extincion,
    MotorMiDer,
    MotorMiizq,
  ]);

  async function submitForm(e) {
    e.preventDefault();
    if (localStorage.getItem("timeIdUser")) {
      setIsloading(true);
      let atimeis = localStorage.getItem("timeIdUser");
      let Id2User = localStorage.getItem("Id2User");
      try {
        await updateDoc(doc(db, "users", email, atimeis, Id2User), {
          NIHHS: myData,
        });
        console.log("Document Updated with ID: ", Id2User);
        setIsloading(false);
        setboxShowclass("dnone");
      } catch (er) {
        console.error("Error adding document: ", er);
      }
    } else {
      alert("Please Complete 1st Section Frist!");
    }
  }

  return (
    <div className="FromHolder">
      {Isloading && <div className={`laodingThinks`}>LOADING....</div>}
      <div className="FormTitle">
        <h3>NIHHS</h3>
        <div onClick={shoenHideBox} className="clickCircle"></div>
      </div>
      <form onSubmit={submitForm} className={`formStyle ${boxShowclass}`}>
        {/* 1A */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            1A. Nivel de Conciencia
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setNivel(e.target.value)}
          >
            <Nihhs1></Nihhs1>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 1B */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            1B. Nivel de Conciencia (preguntas)
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setPreguntas(e.target.value)}
          >
            <Nihhs2></Nihhs2>
          </RadioGroup>
          <FormHelperText>
            Requerido (se pregunta el mes actual y la edad del paciente)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 1C */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            1C. Nivel de Conciencia (órdenes)
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setOrdenes(e.target.value)}
          >
            <Nihhs3></Nihhs3>
          </RadioGroup>
          <FormHelperText>
            Requerido (Ordenes: abrir y cerrar los ojos y empuñar la mano no
            protética)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 2 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            2. Mirada Conjugada
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setMirada(e.target.value)}
          >
            <Nihhs4></Nihhs4>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            3. Campos Visuales
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setCampos(e.target.value)}
          >
            <Nihhs5></Nihhs5>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 4 */}
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            4. Paresia Facial
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setParesia(e.target.value)}
          >
            <Nihhs6></Nihhs6>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 5 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            5. Motor MS-Der.
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setMotorMsDer(e.target.value)}
          >
            <Nihhs7></Nihhs7>
          </RadioGroup>
          <FormHelperText>
            Igual al siguente (Prueba con brazos extendidos a 90° durante 10
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 6 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            6. Motor MS-Izq.
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setMotorMsizq(e.target.value)}
          >
            <Nihhs8></Nihhs8>
          </RadioGroup>
          <FormHelperText>
            Igual al anterior (Prueba con brazos extendidos a 90° durante 10
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 7 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            7. Motor MI-Der.
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setMotorMiDer(e.target.value)}
          >
            <Nihhs9></Nihhs9>
          </RadioGroup>
          <FormHelperText>
            Igual al siguente (Prueba con pierna extendida a 30° durante 5
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 8 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            8. Motor MI-IZQ
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setMotorMiizq(e.target.value)}
          >
            <Nihhs10></Nihhs10>
          </RadioGroup>
          <FormHelperText>
            Igual al anterior (Prueba con pierna extendida a 30° durante 5
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 9 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            9. Ataxia
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setAtaxia(e.target.value)}
          >
            <Nihhs11></Nihhs11>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 10 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            10. Sensibilidad
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setSensibilidad(e.target.value)}
          >
            <Nihhs12></Nihhs12>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 11 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            11. Lenguaje
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setLenguaje(e.target.value)}
          >
            <Nihhs13></Nihhs13>
          </RadioGroup>
        </FormControl>
        <br />

        {/* 12 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            12. Disartria
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setDisartria(e.target.value)}
          >
            <Nihhs14></Nihhs14>
          </RadioGroup>
        </FormControl>
        <br />
        {/* 13 */}

        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            13. Extinción (Inatención) Negligencia
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setExtincion(e.target.value)}
          >
            <Nihhs15></Nihhs15>
          </RadioGroup>
        </FormControl>
        <br />
        {/* <button onClick={routeChange}></button> */}
        <OutlinedButtons1></OutlinedButtons1>
        <br></br>
        <br></br>
        <div className={`formStyle ${boxShowclass} resultshit`}>
          <h3>
            {resultC} <sup>Puntos</sup>
          </h3>
          <p>NIH Stroke Scale</p>
          {/* {
                        resultC>=6?"Según el estudio de validación, 6-7 puntos: High Risk":resultC>=4&&resultC<=5?"Según el estudio de validación, 4-5 puntos: Moderate Risk":"Según el estudio de validación, 0-3 puntos: Low Risk"
                    }
                    <br></br>
                    {
                        resultC>=6?"Riesgo de accidente cerebrovascular de 2 días: 8.1%":resultC>=4&&resultC<=5?"Riesgo de accidente cerebrovascular de 2 días: 4.1%":"Riesgo de accidente cerebrovascular de 2 días: 1.0%"
                    }
                
                     <br></br>
                    {
                        resultC>=6?"Riesgo de accidente cerebrovascular de 7 días: 11.7%":resultC>=4&&resultC<=5?"Riesgo de accidente cerebrovascular de 7 días: 5.9%":"Riesgo de accidente cerebrovascular de 7 días: 1.2%"
                    }
                    <br></br>
                    {
                        resultC>=6?"Riesgo de accidente cerebrovascular de 90 días: 17.8%":resultC>=4&&resultC<=5?"Riesgo de accidente cerebrovascular de 90 días: 9.8%":"Riesgo de accidente cerebrovascular de 90 días: 3.1%"
                    }
                    <br></br>    */}
        </div>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Abcd;
