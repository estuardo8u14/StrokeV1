import * as React from "react";
import Button from "@mui/material/Button";
//import Stack from "@mui/material/Stack";
import NihhsRes from "../NIHHS/NihhsRes";

class OutlinedButtons1 extends React.Component {
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
        {this.state.showComponent ? <NihhsRes /> : null}
      </div>
    );
  }
}

export default OutlinedButtons1;
