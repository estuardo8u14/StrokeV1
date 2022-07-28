import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Nihhs1() {
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
      <ToggleButton value="aleta">0 = Aleta</ToggleButton>
      <ToggleButton value="som">1 = Somnolencia</ToggleButton>
      <ToggleButton value="est">2 = Estupor</ToggleButton>
      <ToggleButton value="coma">3 = Coma</ToggleButton>
    </ToggleButtonGroup>
  );
}
