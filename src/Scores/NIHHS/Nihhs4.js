import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Nihhs4() {
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
      <ToggleButton value="som">1 = Parálisis parcial</ToggleButton>
      <ToggleButton value="est">2 = Desviación forzada</ToggleButton>
    </ToggleButtonGroup>
  );
}
