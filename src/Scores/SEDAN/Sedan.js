import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Sedan() {
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
      <ToggleButton value="paresia">
        0 = menor que 145 mg/dL (8.1 mmol/L)
      </ToggleButton>
      <ToggleButton value="sin">
        1 = 145-216 mg/dL (8.1-12.0 mmol/L)
      </ToggleButton>
      <ToggleButton value="ninguna">
        2 = mayor que 216 mg/dL (12.0 mmol/L)
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
