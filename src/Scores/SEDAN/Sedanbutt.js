import * as React from "react";
import Button from "@mui/material/Button";
//import Stack from "@mui/material/Stack";
import SedanRes from "../SEDAN/SedanRes";

class OutlinedButtons4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this._onButtonClick}>Enviar</Button>
        {this.state.showComponent ? <SedanRes /> : null}
      </div>
    );
  }
}

export default OutlinedButtons4;
