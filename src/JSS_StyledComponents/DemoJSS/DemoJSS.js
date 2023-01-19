import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import { TextField } from "../Components/TextField";
import { StyledLink } from "./../Components/Link";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button_styled" bgPrimary fontSize2x>
          Hello Cute Girl
        </Button>
        <SmallButton>Hello Y</SmallButton>
        <StyledLink>Ahihi</StyledLink>
        <TextField inputColor="purple" />
      </div>
    );
  }
}
