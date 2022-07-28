import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Dragon5() {
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
      <ToggleButton value="aleta">0 = 0-4</ToggleButton>
      <ToggleButton value="som">1 = 5-9</ToggleButton>
      <ToggleButton value="est">2 = 10-15</ToggleButton>
      <ToggleButton value="est">2 = mayor o igual que 16</ToggleButton>
    </ToggleButtonGroup>
  );
}
