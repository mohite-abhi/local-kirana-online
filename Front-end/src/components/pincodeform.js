import React from "react";
import PinInput from "react-pin-input";
import { Link } from "react-router-dom";
import fetch from "isomorphic-fetch";
import ChangeRoute from "./ChangeRoute";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: "",
      value: "",
    };
  }
  onChange = (value) => {
    this.setState({ value });
  };

  submit(value) {
    console.log(value);
    fetch("http://localhost:9000/storesFromLocations", {
      method: "POST",
      body: JSON.stringify({ value: value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ apiResponse: res }, () => {
          console.log(this.state.apiResponse);
        });
      });
    this.props.history.push("shop");
  }

  onClear = () => {
    this.setState({
      value: "",
    });
    this.pin.clear();
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app">
        <PinInput
          length={6}
          focus
          ref={(p) => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
        />

        <p>{value}</p>
        <div>
          <button onClick={this.onClear}>Clear</button>
          <button onClick={() => this.submit(value)}> Submit</button>
          <p>{this.state.apiResponse}</p>
        </div>
      </div>
    );
  }
}
export default App;
