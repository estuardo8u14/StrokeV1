import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton2() {
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
      <ToggleButton value="diez"> menos de 10 minutos</ToggleButton>
      <ToggleButton value="entre">10-59 minutos10-59 minutos</ToggleButton>
      <ToggleButton value="sesenta">≥ 60 minutos</ToggleButton>
    </ToggleButtonGroup>
  );
}
