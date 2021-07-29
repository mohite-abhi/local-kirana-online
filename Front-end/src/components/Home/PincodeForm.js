import React from "react";
import PinInput from "react-pin-input";
import { Link, withRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";
import { useHistory } from "react-router-dom";

// const ChangeRoute = (path) => {
//   const history = useHistory();
//   history.push("path");
// };

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  onChange = (value) => {
    this.setState({ value });
  };

  submit(value) {
    console.log(value);
    this.props.onPinChange(value);
    this.props.history.push("/shop");
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
export default withRouter(App);
