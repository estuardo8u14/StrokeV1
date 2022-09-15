import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./estilos.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";

const Datasetone = () => {
  // const [boxshonhide, setboxshonhide] = useState(false);
  const [boxShowclass, setboxShowclass] = useState("dnone");
  const [numRegistro, setnumRegistro] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");
  const [Nombre, setNombre] = useState("");
  const [UltimaHora, setUltimaHora] = useState("");
  const [EntradaHora, setEntradaHora] = useState("");
  const [ictusDespertar, setictusDespertar] = useState("");
  const [ictusHospital, setictusHospital] = useState("");
  const [transportePaciente, settransportePaciente] = useState("");
  const [antecedentesTratamiento, setantecedentesTratamiento] = useState("");
  const [lugarIngresado, setlugarIngresado] = useState("");
  const [glucosaPrimera, setglucosaPrimera] = useState("");
  const [colesterolPrimera, csetolesterolPrimera] = useState("");
  const [presionPrimera, setpresionPrimera] = useState("");
  const [escalaGlasgow, setescalaGlasgow] = useState("");
  const [mRSantesIctus, setmRSantesIctus] = useState("");
  const [INRPrimera, setINRPrimera] = useState("");
  const [covidPositivo, setcovidPositivo] = useState("");
  //const [imagenesCerebrales, ] = useState("");
  const [infartosAntiguos, setinfartosAntiguos] = useState("");
  const [tipoIctus, settipoIctus] = useState("");
  const [oclusionATMARM, setoclusionATMARM] = useState("");
  const [oclusionUbicacion, setoclusionUbicacion] = useState("");
  const [trombolisisIntra, settrombolisisIntra] = useState("");
  const [pacieteVentilado, setpacieteVentilado] = useState("");
  const [craniectomiaDescom, setcraniectomiaDescom] = useState("");
  const [diagnosticoSiete, setdiagnosticoSiete] = useState("");
  const [estenosisCS, setestenosisCS] = useState("");
  const [etiologiaCausaIctus, setetiologiaCausaIctus] = useState("");
  const [intervencionesTEV, setintervencionesTEV] = useState("");
  const [ComplicacionesPostIctus, setComplicacionesPostIctus] = useState("");
  const [TCRMPostTx, setTCRMPostTx] = useState("");
  const [ResultadosTACRMNPostTx, setResultadosTACRMNPostTx] = useState("");
  const [consultaFisio, setconsultaFisio] = useState("");
  const [destinoAlta, setdestinoAlta] = useState("");
  const [fechaAlta, setfechaAlta] = useState("");
  const [TxPreAlta, setTxPreAlta] = useState("");
  const [fechaSeguimiento, setfechaSeguimiento] = useState("");
  const [perfilLipidico, setperfilLipidico] = useState("");
  const [perfilTiroideo, setperfilTiroideo] = useState("");
  const [hemoGlicosilada, sethemoGlicosilada] = useState("");
  const [IdContraRMNCerebral, setIdContraRMNCerebral] = useState("");
  const [Isloading, setIsloading] = useState(false);

  const myData = {
    numRegistro: numRegistro,
    edadPaciente: edadPaciente,
    sexoPaciente: sexoPaciente,
    Nombre: Nombre,
    UltimaHora: UltimaHora,
    EntradaHora: EntradaHora,
    ictusDespertar: ictusDespertar,
    ictusHospital: ictusHospital,
    transportePaciente: transportePaciente,
    antecedentesTratamiento: antecedentesTratamiento,
    lugarIngresado: lugarIngresado,
    glucosaPrimera: glucosaPrimera,
    colesterolPrimera: colesterolPrimera,
    presionPrimera: presionPrimera,
    NIHHS: {},
    escalaGlasgow: escalaGlasgow,
    mRSantesIctus: mRSantesIctus,
    INRPrimera: INRPrimera,
    covidPositivo: covidPositivo,
    //imagenesCerebrales: imagenesCerebrales,
    infartosAntiguos: infartosAntiguos,
    tipoIctus: tipoIctus,
    oclusionATMARM: oclusionATMARM,
    oclusionUbicacion: oclusionUbicacion,
    trombolisisIntra: trombolisisIntra,
    pacieteVentilado: pacieteVentilado,
    craniectomiaDescom: craniectomiaDescom,
    diagnosticoSiete: diagnosticoSiete,
    estenosisCS: estenosisCS,
    etiologiaCausaIctus: etiologiaCausaIctus,
    intervencionesTEV: intervencionesTEV,
    ComplicacionesPostIctus: ComplicacionesPostIctus,
    TCRMPostTx: TCRMPostTx,
    ResultadosTACRMNPostTx: ResultadosTACRMNPostTx,
    consultaFisio: consultaFisio,
    destinoAlta: destinoAlta,
    fechaAlta: fechaAlta,
    NIHHS2: {},
    TxPreAlta: TxPreAlta,
    fechaSeguimiento: fechaSeguimiento,
    ASPECTS: {},
    DRAGON: {},
    HAT: {},
    SEDAN: {},
    perfilLipidico: perfilLipidico,
    perfilTiroideo: perfilTiroideo,
    hemoGlicosilada: hemoGlicosilada,
    IdContraRMNCerebral: IdContraRMNCerebral,
  };

  async function submitForm(e) {
    e.preventDefault();
    setIsloading(true);
    let atimeis = new Date().getTime().toString();
    try {
      const docRef = await addDoc(
        collection(db, "users", email, atimeis),
        myData
      );
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem("timeIdUser", atimeis);
      localStorage.setItem("Id2User", docRef.id);
      setIsloading(false);
      setboxShowclass("dnone");
    } catch (er) {
      console.error("Error adding document: ", er);
    }
  }
  const { email } = auth.currentUser;

  const shoenHideBox = () => {
    //console.log(auth.currentUser)
    if (boxShowclass === "dnone") {
      setboxShowclass("dshow");
    } else {
      setboxShowclass("dnone");
    }
  };
  return (
    <div className="FromHolder">
      {Isloading && <div className={`laodingThinks`}>LOADING....</div>}
      <div className="FormTitle">
        <h3>Ficha del paciente</h3>
        <div onClick={shoenHideBox} className="clickCircle"></div>
      </div>
      <form onSubmit={submitForm} className={`formStyle ${boxShowclass}`}>
        <TextField
          placeholder="No. Registro"
          label="No. Registro"
          //onChange={handleCambio("ultimaHora")}
          //defaultValue={valores.ultimaHora}
          onChange={(e) => setnumRegistro(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Edad"
          label="Edad del paciente"
          //onChange={handleCambio("nombrePaciente")}
          //defaultValue={valores.nombrePaciente}
          onChange={(e) => setedadPaciente(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Sexo"
          label="Sexo del paciente"
          //onChange={handleCambio("nombrePaciente")}
          //defaultValue={valores.nombrePaciente}
          onChange={(e) => setsexoPaciente(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Nombre del paciente"
          label="Nombre del paciente"
          //onChange={handleCambio("nombrePaciente")}
          //defaultValue={valores.nombrePaciente}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Ultima vez que lo vio en buen estado (fecha y hora)"
          label="Ultima vez que lo vio en buen estado (fecha y hora)"
          //onChange={handleCambio("usuarioRegistrando")}
          //defaultValue={valores.usuarioRegistrando}
          onChange={(e) => setUltimaHora(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Hora de ingreso del paciente"
          label="Hora de ingreso del paciente"
          //onChange={handleCambio("entradaHora")}
          //defaultValue={valores.entradaHora}
          onChange={(e) => setEntradaHora(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Datasetone;
