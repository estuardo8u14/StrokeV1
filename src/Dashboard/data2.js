import TextField from "@material-ui/core/TextField";

const pacientes = [
  {
    id: 7,
    title: "Ficha del paciente",
    info: (
      <form>
        <TextField
          placeholder="Usuario"
          label="Nombre de la persona que registra al paciente"
          //onChange={handleCambio("ultimaHora")}
          //defaultValue={valores.ultimaHora}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Nombre del paciente"
          label="Nombre del paciente"
          //onChange={handleCambio("nombrePaciente")}
          //defaultValue={valores.nombrePaciente}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="ultimaHora"
          label="Última hora que se vio al paciente"
          //onChange={handleCambio("usuarioRegistrando")}
          //defaultValue={valores.usuarioRegistrando}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="entradaHora"
          label="Hora de llegada del paciente"
          //onChange={handleCambio("entradaHora")}
          //defaultValue={valores.entradaHora}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="edadPaciente"
          label="Edad del paciente"
          //onChange={handleCambio("edadPaciente")}
          //defaultValue={valores.edadPaciente}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="laborPaciente"
          label="Labor del paciente"
          //onChange={handleCambio("laborPaciente")}
          //defaultValue={valores.laborPaciente}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="condicionesMedicas"
          label="Condiciones médicas del paciente"
          //onChange={handleCambio("condicionesMedicas")}
          //defaultValue={valores.condicionesMedicas}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="txActual"
          label="Tratamiento actual del paciente"
          //onChange={handleCambio("txActual")}
          //defaultValue={valores.txActual}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="padecimientoActual"
          label="Padecimiento actual del paciente"
          //onChange={handleCambio("padecimientoActual")}
          ////defaultValue={valores.padecimientoActual}
          margin="normal"
          fullWidth
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    ),
  },
  {
    id: 8,
    title: "Glucometro",
    info: (
      <form>
        <TextField
          placeholder="mg/dL"
          label="Glucometro"
          //onChange={handleCambio("glucometro")}
          //defaultValue={valores.glucometro}
          margin="normal"
          fullWidth
        />
      </form>
    ),
  },
  {
    id: 9,
    title: "Presion Arterial",
    info: (
      <form>
        <TextField
          placeholder="mm Hg"
          label="Presión arterial"
          //onChange={handleCambio("presionArterial")}
          //defaultValue={valores.presionArterial}
          margin="normal"
          fullWidth
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    ),
  },
];

export default pacientes;
