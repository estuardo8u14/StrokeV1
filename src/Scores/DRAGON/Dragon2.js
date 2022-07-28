import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Dragon2() {
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
      <ToggleButton value="aleta">0 = menor que 65</ToggleButton>
      <ToggleButton value="som">1 = 65-79</ToggleButton>
      <ToggleButton value="est">2 = mayor o igual que 80</ToggleButton>
    </ToggleButtonGroup>
  );
}
