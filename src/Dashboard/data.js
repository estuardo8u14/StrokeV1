// import TextField from "@material-ui/core/TextField";
import * as React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ColorToggleButton from "../Scores/ABCD/Abcd";
import ColorToggleButton1 from "../Scores/ABCD/Abcd1";
import ColorToggleButton2 from "../Scores/ABCD/Abcd2";
import OutlinedButtons from "../Scores/ABCD/Abcdbutt";
import OutlinedButtons1 from "../Scores/NIHHS/Nihhsbutt";
import OutlinedButtons2 from "../Scores/DRAGON/Dragonbutt";
import OutlinedButtons3 from "../Scores/HAT/Hatbutt";
import OutlinedButtons4 from "../Scores/SEDAN/Sedanbutt";
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
import Aspects from "../Scores/ASPECTS/Aspects";
import Dragon from "../Scores/DRAGON/Dragon";
import Dragon1 from "../Scores/DRAGON/Dragon1";
import Dragon2 from "../Scores/DRAGON/Dragon2";
import Dragon3 from "../Scores/DRAGON/Dragon3";
import Dragon4 from "../Scores/DRAGON/Dragon4";
import Dragon5 from "../Scores/DRAGON/Dragon5";
import Hat from "../Scores/HAT/Hat";
import Hat1 from "../Scores/HAT/Hat1";
import Hat2 from "../Scores/HAT/Hat2";
import Sedan from "../Scores/SEDAN/Sedan";
import Sedan1 from "../Scores/SEDAN/Sedan1";
import Sedan2 from "../Scores/SEDAN/Sedan2";
import Sedan3 from "../Scores/SEDAN/Sedan3";
import Sedan4 from "../Scores/SEDAN/Sedan4";

const questions = [
  {
    id: 1,
    title: "ABCD",
    info: (
      <form>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Edad ≥ 60 años
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
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
          >
            <ColorToggleButton></ColorToggleButton>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <OutlinedButtons></OutlinedButtons>
      </form>
    ),
  },
  {
    id: 2,
    title: "NIHHS",
    info: (
      <form>
        {/* 1A */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            1A. Nivel de Conciencia
          </FormLabel>
          <Nihhs1></Nihhs1>
        </FormControl>
        <br />
        {/* 1B */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            1B. Nivel de Conciencia (preguntas)
          </FormLabel>
          <Nihhs2></Nihhs2>
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
          <Nihhs3></Nihhs3>
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
          <Nihhs4></Nihhs4>
        </FormControl>
        <br />
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            3. Campos Visuales
          </FormLabel>
          <Nihhs5></Nihhs5>
        </FormControl>
        <br />
        {/* 4 */}
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            4. Paresia Facial
          </FormLabel>
          <Nihhs6></Nihhs6>
        </FormControl>
        <br />
        {/* 5 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            5. Motor MS-Der.
          </FormLabel>
          <Nihhs7></Nihhs7>
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
          <Nihhs8></Nihhs8>
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
          <Nihhs9></Nihhs9>
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
          <Nihhs10></Nihhs10>
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
          <Nihhs11></Nihhs11>
        </FormControl>
        <br />
        {/* 10 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            10. Sensibilidad
          </FormLabel>
          <Nihhs12></Nihhs12>
        </FormControl>
        <br />
        {/* 11 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            11. Lenguaje
          </FormLabel>
          <Nihhs13></Nihhs13>
        </FormControl>
        <br />

        {/* 12 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            12. Disartria
          </FormLabel>
          <Nihhs14></Nihhs14>
        </FormControl>
        <br />
        {/* 13 */}

        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <FormLabel id="demo-row-radio-buttons-group-label">
            13. Extinción (Inatención) Negligencia
          </FormLabel>
          <Nihhs15></Nihhs15>
        </FormControl>
        <br />
        {/* <button onClick={routeChange}></button> */}
        <OutlinedButtons1></OutlinedButtons1>
      </form>
    ),
  },
  {
    id: 3,
    title: "ASPECTS",
    info: (
      <form>
        <Aspects></Aspects>
      </form>
    ),
  },
  {
    id: 4,
    title: "DRAGON",
    info: (
      <form>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            HyperDense Cerebral Artery / Early Infarct on CT
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Dragon></Dragon>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Modified Rankin Scale menor que 1, prestroke
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Dragon1></Dragon1>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Age</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <Dragon2></Dragon2>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Glucose at Baselin menor que 144 mg/dL (8 mmol/L)
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <Dragon3></Dragon3>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Onset of Treatment mayor 90 minutes
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Dragon4></Dragon4>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Baseline NIH Stroke Scale
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Dragon5></Dragon5>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <OutlinedButtons2></OutlinedButtons2>
      </form>
    ),
  },
  {
    id: 5,
    title: "HAT",
    info: (
      <form>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            History of diabetes or initial glucose MAYOR QUE 200 mg/dL
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Hat></Hat>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Modified Rankin Scale menor que 1, prestroke
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Hat1></Hat1>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Age</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <Hat2></Hat2>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <OutlinedButtons3></OutlinedButtons3>
      </form>
    ),
  },
  {
    id: 6,
    title: "SEDAN",
    info: (
      <form>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Blood sugar
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Sedan></Sedan>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Early infarct signs on initial CT
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Sedan1></Sedan1>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Hyperdense cerebral artery sign on initial CT
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <Sedan2></Sedan2>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Age mayor que 75 years
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Sedan3></Sedan3>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            NIH Stroke Scale (NIHSS) mayor que 10
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Sedan4></Sedan4>
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <OutlinedButtons4></OutlinedButtons4>
      </form>
    ),
  },
];
export default questions;
