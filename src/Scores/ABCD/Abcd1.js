import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton1() {
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
      <ToggleButton value="paresia">Paresia Unilateral</ToggleButton>
      <ToggleButton value="sin">
        Alteración de lenguaje sin paresia
      </ToggleButton>
      <ToggleButton value="ninguna">Ninguna</ToggleButton>
    </ToggleButtonGroup>
  );
}
