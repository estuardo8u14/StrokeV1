import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Hat1() {
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
      <ToggleButton value="paresia">0 = menor que 15</ToggleButton>
      <ToggleButton value="sin">1 = 15-20</ToggleButton>
      <ToggleButton value="ninguna">2 = mayor o igual que 20</ToggleButton>
    </ToggleButtonGroup>
  );
}
