import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Nihhs12() {
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
      <ToggleButton value="aleta">0 = Ausente</ToggleButton>
      <ToggleButton value="som">1 = Pérdida parcial, leve</ToggleButton>
      <ToggleButton value="est">2 = Pérdida densa</ToggleButton>
    </ToggleButtonGroup>
  );
}
