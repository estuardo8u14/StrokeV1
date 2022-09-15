import React, { useState, useEffect } from "react";
import "./estilos.css";
import ColorToggleButton from "../Scores/ABCD/Abcd";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ColorToggleButton1 from "../Scores/ABCD/Abcd1";
import ColorToggleButton2 from "../Scores/ABCD/Abcd2";
import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";

const Abcd = () => {
  // const [Isloading, setIsloading] = useState(false);
  const [Edad, setEdad] = useState(0);
  const [Arterial, setArterial] = useState(0);
  const [Manifest, setManifest] = useState(0);
  const [Symptoms, setSymptoms] = useState(0);
  const [Diabetes, setDiabetes] = useState(0);
  const [resultC, setresultC] = useState(0);
  const [Isloading, setIsloading] = useState(false);
  const { email } = auth.currentUser;
  const myData = {
    Edad: Edad,
    Arterial: Arterial,
    Manifest: Manifest,
    Symptoms: Symptoms,
    Diabetes: Diabetes,
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
      parseInt(Edad) +
      parseInt(Arterial) +
      parseInt(Manifest) +
      parseInt(Symptoms) +
      parseInt(Diabetes);
    setresultC(resis);
  }, [Edad, Arterial, Manifest, Symptoms, Diabetes]);

  async function submitForm(e) {
    e.preventDefault();
    if (localStorage.getItem("timeIdUser")) {
      setIsloading(true);
      let atimeis = localStorage.getItem("timeIdUser");
      let Id2User = localStorage.getItem("Id2User");
      try {
        await updateDoc(doc(db, "users", email, atimeis, Id2User), {
          ABCD: myData,
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
        <h3>ABCD</h3>
        <div onClick={shoenHideBox} className="clickCircle"></div>
      </div>
      <form onSubmit={submitForm} className={`formStyle ${boxShowclass}`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Edad ≥ 60 años
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setEdad(e.target.value)}
          >
            <ColorToggleButton></ColorToggleButton>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Presión Arterial ≥ 140/90 mmHg
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setArterial(e.target.value)}
          >
            <ColorToggleButton></ColorToggleButton>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Manifestaciones Clínicas
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onClick={(e) => setManifest(e.target.value)}
          >
            <ColorToggleButton1></ColorToggleButton1>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Duración de sintomas
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onClick={(e) => setSymptoms(e.target.value)}
          >
            <ColorToggleButton2></ColorToggleButton2>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Historia de diabetes
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onClick={(e) => setDiabetes(e.target.value)}
          >
            <ColorToggleButton></ColorToggleButton>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <div className={`formStyle ${boxShowclass} resultshit`}>
          <h3>
            {resultC} <sup>Puntos</sup>
          </h3>
          {resultC >= 6
            ? "Según el estudio de validación, 6-7 puntos: High Risk"
            : resultC >= 4 && resultC <= 5
            ? "Según el estudio de validación, 4-5 puntos: Moderate Risk"
            : "Según el estudio de validación, 0-3 puntos: Low Risk"}
          <br></br>
          {resultC >= 6
            ? "Riesgo de accidente cerebrovascular de 2 días: 8.1%"
            : resultC >= 4 && resultC <= 5
            ? "Riesgo de accidente cerebrovascular de 2 días: 4.1%"
            : "Riesgo de accidente cerebrovascular de 2 días: 1.0%"}

          <br></br>
          {resultC >= 6
            ? "Riesgo de accidente cerebrovascular de 7 días: 11.7%"
            : resultC >= 4 && resultC <= 5
            ? "Riesgo de accidente cerebrovascular de 7 días: 5.9%"
            : "Riesgo de accidente cerebrovascular de 7 días: 1.2%"}
          <br></br>
          {resultC >= 6
            ? "Riesgo de accidente cerebrovascular de 90 días: 17.8%"
            : resultC >= 4 && resultC <= 5
            ? "Riesgo de accidente cerebrovascular de 90 días: 9.8%"
            : "Riesgo de accidente cerebrovascular de 90 días: 3.1%"}
          <br></br>
        </div>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Abcd;
