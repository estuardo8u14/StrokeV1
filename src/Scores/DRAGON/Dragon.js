import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Dragon() {
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
      <ToggleButton value="aleta">0 = No</ToggleButton>
      <ToggleButton value="som">1 = Una</ToggleButton>
      <ToggleButton value="est">2 = Ambas</ToggleButton>
    </ToggleButtonGroup>
  );
}
