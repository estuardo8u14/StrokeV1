// import TextField from "@material-ui/core/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

const questions = [
  {
    id: 1,
    title: "ABCD",
    info: (
      <form>
        {/* A */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small">Edad ≥ 60 años (Age)</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Edad ≥ 60 años (Age)
            "
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = edad ≤ 60</MenuItem>
            <MenuItem value={1}>1 = edad ≥ 60</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* B */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small">
            Presión arterial ≥ 40/90 (Blood Pressure)
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Presión arterial ≥ 40/90 (Blood Pressure)"
            //onChange={handleChange}
          >
            <MenuItem value={0}>Presión arterial ≤ 40/90</MenuItem>
            <MenuItem value={1}>Presión arterial ≥ 40/90</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* C */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small">
            Maniferstaciones Clínicas (C)
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Maniferstaciones Clínicas (C)"
            //onChange={handleChange}
          >
            <MenuItem value={0}>Ninguna</MenuItem>
            <MenuItem value={1}>1 = Alteración lenguaje sin paresia</MenuItem>
            <MenuItem value={2}>2 = Paresia unilateral</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* D */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small">Duración</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Duración
            "
            //onChange={handleChange}
          >
            <MenuItem value={1}>1 = 10-59 mins</MenuItem>
            <MenuItem value={2}>1 = edad ≥ 60 mins</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* D2 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small">Diabetes Mellitus</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Diabetes Mellitus
            "
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = No presente</MenuItem>
            <MenuItem value={1}>1 = presente</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* <input type="submit" value="Enviar" /> */}
        <button href="http://localhost:3000/ABCD">Enviar</button>
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
          <InputLabel id="demo-select-small">
            1A. Nivel de Conciencia
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="1A. Nivel de Conciencia*"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Aleta</MenuItem>
            <MenuItem value={1}>1 = Somnolencia</MenuItem>
            <MenuItem value={2}>2 = Estupor</MenuItem>
            <MenuItem value={3}>3 = Coma</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 1B */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">
            1B. Nivel de Conciencia (preguntas)
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="Nivel de Conciencia (preguntas) *"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Ambas Correctas</MenuItem>
            <MenuItem value={1}>1 = Una Correcta</MenuItem>
            <MenuItem value={2}>2 = Ambas Incorrectas</MenuItem>
          </Select>
          <FormHelperText>
            Requerido (se pregunta el mes actual y la edad del paciente)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 1C */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">
            1C. Nivel de Conciencia (órdenes)
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="1C. Nivel de Conciencia (órdenes)*"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Responde Ambas</MenuItem>
            <MenuItem value={1}>1 = Responde Una</MenuItem>
            <MenuItem value={2}>2 = No Responde</MenuItem>
          </Select>
          <FormHelperText>
            Requerido (Ordenes: abrir y cerrar los ojos y empuñar la mano no
            protética)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 2 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">2. Mirada Conjugada</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="2. Mirada Conjugada"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Parálisis parcial</MenuItem>
            <MenuItem value={2}>2 = Desviación forzada</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">3. Campos Visuales</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="3. Campos Visuales"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Hemianopsia parcial</MenuItem>
            <MenuItem value={2}>2 = Hemianopsia completa</MenuItem>
            <MenuItem value={3}> 3 = Hemianospia bilateral</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 4 */}
        {/* 3 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">4. Paresia Facial</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="4. Paresia Facial"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Asimetría menor</MenuItem>
            <MenuItem value={2}>2 = Paresia parcial (central)</MenuItem>
            <MenuItem value={3}> 3 = Parálisis completa</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 5 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">5. Motor MS-Der.</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="5. Motor MS-Der."
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Desviación del miembro</MenuItem>
            <MenuItem value={2}>2 = Algún esfuerzo vs gravedad</MenuItem>
            <MenuItem value={3}>3 = Sin esfuerzo vs gravedad</MenuItem>
            <MenuItem value={4}>4 = Sin movimiento</MenuItem>
          </Select>
          <FormHelperText>
            Igual al siguente (Prueba con brazos extendidos a 90° durante 10
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 6 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">6. Motor MS-Izq.</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="6. Motor MS-IZQ."
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Desviación del miembro</MenuItem>
            <MenuItem value={2}>2 = Algún esfuerzo vs gravedad</MenuItem>
            <MenuItem value={3}>3 = Sin esfuerzo vs gravedad</MenuItem>
            <MenuItem value={4}>4 = Sin movimiento</MenuItem>
          </Select>
          <FormHelperText>
            Igual al anterior (Prueba con brazos extendidos a 90° durante 10
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 7 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">7. Motor MI-Der.</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="7. Motor MI-Der."
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Desviación del miembro</MenuItem>
            <MenuItem value={2}>2 = Algún esfuerzo vs gravedad</MenuItem>
            <MenuItem value={3}>3 = Sin esfuerzo vs gravedad</MenuItem>
            <MenuItem value={4}>4 = Sin movimiento</MenuItem>
          </Select>
          <FormHelperText>
            Igual al siguente (Prueba con pierna extendida a 30° durante 5
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 8 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">8. Motor MI-IZQ</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="8. Motor MI-IZQ"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Desviación del miembro</MenuItem>
            <MenuItem value={2}>2 = Algún esfuerzo vs gravedad</MenuItem>
            <MenuItem value={3}>3 = Sin esfuerzo vs gravedad</MenuItem>
            <MenuItem value={4}>4 = Sin movimiento</MenuItem>
          </Select>
          <FormHelperText>
            Igual al anterior (Prueba con pierna extendida a 30° durante 5
            segundos)
          </FormHelperText>
        </FormControl>
        <br />
        {/* 9 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">9. Ataxia</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="9. Ataxia"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Ausente</MenuItem>
            <MenuItem value={1}>1 = Presente en una extremidad</MenuItem>
            <MenuItem value={2}>2 = Presente en 2 o más extremidades</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 10 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">10. Sensibilidad</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="10. Sensibilidad"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Ausente</MenuItem>
            <MenuItem value={1}>1 = Pérdida parcial, leve</MenuItem>
            <MenuItem value={2}>2 = Pérdida densa</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 11 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">11. Lenguaje</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="11. Lenguaje
"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Normal</MenuItem>
            <MenuItem value={1}>1 = Afasia leve a moderada</MenuItem>
            <MenuItem value={2}>2 = Afasia severa</MenuItem>
            <MenuItem value={3}>3 = Mutismo</MenuItem>
          </Select>
        </FormControl>
        <br />

        {/* 12 */}
        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">12. Disartria</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="12. Disartria"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Articulación Normal</MenuItem>
            <MenuItem value={1}>1 = Disartria leve a moderada</MenuItem>
            <MenuItem value={2}>2 = Ininteligible</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* 13 */}

        <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
          <InputLabel id="demo-select-small">
            13. Extinción (Inatención) Negligencia
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            //value={age}
            label="13. Extinción (Inatención) Negligencia"
            //onChange={handleChange}
          >
            <MenuItem value={0}>0 = Ausente</MenuItem>
            <MenuItem value={1}>1 = Parcial</MenuItem>
            <MenuItem value={2}>2 = Completa</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* <button onClick={routeChange}></button> */}
      </form>
    ),
  },
  {
    id: 3,
    title: "ASPECTS",
    info: "",
  },
  {
    id: 4,
    title: "DRAGON",
    info: "",
  },
  {
    id: 5,
    title: "HAT",
    info: "",
  },
  {
    id: 6,
    title: "SEDAN",
    info: "",
  },
];
export default questions;
