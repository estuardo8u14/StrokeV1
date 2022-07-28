import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Nihhs10() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="aleta">0 = Normal</ToggleButton>
      <ToggleButton value="som">1 = Desviación del miembro</ToggleButton>
      <ToggleButton value="est">2 = Algún esfuerzo vs gravedad</ToggleButton>
      <ToggleButton value="coma">3 = Sin esfuerzo vs gravedadl</ToggleButton>
      <ToggleButton value="coma">4 = Sin movimiento</ToggleButton>
    </ToggleButtonGroup>
  );
}
