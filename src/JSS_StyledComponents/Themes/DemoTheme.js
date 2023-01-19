import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import React, { Component } from "react";
const configDarkTheme = {
  background: "#000",
  color: "#fff",
  fontSize: "15px",
  fontWeight: "bold",
};

const configLightTheme = {
  background: "#82E0AA",
  color: "#000",
  fontSize: "20px",
  fontWeight: "300",
};

export default class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };

  handleChangTheme = (event) => {
    this.setState({
      currentTheme:
        event.target.value == "1" ? configDarkTheme : configLightTheme,
    });
  };

  render() {
    const DivStyled = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyled>Hello I'm yasuo 7 of grade skill</DivStyled>
        <select onChange={this.handleChangTheme}>
          <option value={1}>Dark Theme</option>
          <option value={2}>Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
