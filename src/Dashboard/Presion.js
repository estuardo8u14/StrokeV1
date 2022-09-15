import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../Auth/firebase";

const Presion = () => {
  const [Isloading, setIsloading] = useState(false);
  const [Presion, setPresion] = useState("");
  const { email } = auth.currentUser;
  async function submitForm(e) {
    e.preventDefault();

    if (localStorage.getItem("timeIdUser")) {
      setIsloading(true);
      let atimeis = localStorage.getItem("timeIdUser");
      let Id2User = localStorage.getItem("Id2User");
      try {
        await updateDoc(doc(db, "users", email, atimeis, Id2User), {
          Presion: Presion,
        });
        console.log("Document Updated with ID: ", Id2User);
        setIsloading(false);
      } catch (er) {
        console.error("Error adding document: ", er);
      }
    } else {
      alert("Please Complete 1st Section Frist!");
    }
  }

  // const [boxshonhide, setboxshonhide] = useState(false);
  const [boxShowclass, setboxShowclass] = useState("dnone");
  const shoenHideBox = () => {
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
        <h3>Presion</h3>
        <div onClick={shoenHideBox} className="clickCircle"></div>
      </div>
      <form onSubmit={submitForm} className={`formStyle ${boxShowclass}`}>
        <TextField
          placeholder="mm Hg"
          label="Presión arterial"
          //onChange={handleCambio("presionArterial")}
          //defaultValue={valores.presionArterial}
          onChange={(e) => setPresion(e.target.value)}
          margin="normal"
          fullWidth
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Presion;
