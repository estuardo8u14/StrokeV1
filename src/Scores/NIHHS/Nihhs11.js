import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Nihhs11() {
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
      <ToggleButton value="som">1 = Presente en una extremidad</ToggleButton>
      <ToggleButton value="est">
        2 = Presente en 2 o más extremidades
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
