import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Hat2() {
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
      <ToggleButton value="paresia">0 = No</ToggleButton>
      <ToggleButton value="sin">
        1 = Si, menor que 1/3 de territorio MCA
      </ToggleButton>
      <ToggleButton value="ninguna">
        2 = Si, mayor o igual que 1/3 de territorio MCA
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
