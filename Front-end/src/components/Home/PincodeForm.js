import React from "react";
import PinInput from "react-pin-input";
import { Link, withRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import './pin.css';

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
    if (value.length === 6){
      this.submit(value);
    }
  };

  submit(value) {
    console.log(value);
    this.props.onPinChange(value);
    this.props.history.push("/shop");
  }

  render() {
    const { value } = this.state;
    return (
      <div className="app">
        <div className = "pin">
          <h2>Pincode</h2>
          <p
           style ={{"font-size":"2vh"}} 
          >
           Search shops by pin, e.g. 752030</p>
        <PinInput className="c"
          length={6}
          focus
          ref={(p) => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
          inputStyle = {{
            width: "2rem",
            height: "2rem"
          }}
        />
        {/* <p>{value}</p> */}
        </div>
        
        <div className = "buttonsa">
          {/* <Button 
          className="submitPin"
          variant="contained" 
          color="primary" 
          onClick={() => this.submit(value)}>
            Submit
          </Button> */}
          {/* <button>submit</button> */}
          <p>{this.state.apiResponse}</p>
        </div>
      </div>
    );
  }
}
export default withRouter(App);
