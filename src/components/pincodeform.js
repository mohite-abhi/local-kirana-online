import React from "react";
import PinInput from "react-pin-input";
import {Link } from "react-router-dom";
import fetch from 'isomorphic-fetch';

class App extends React.PureComponent {
    
  constructor(props){
      super(props);
    
    this.state = {
    apiResponse : ""
    }
    ;}
    state = {
        value: ""

    }
    onChange = (value) => {
        this.setState({ value });
    };

   
   submit(value){
       console.log(value);
        fetch("http://localhost:9000/storesFromLocation",{
            method: 'POST',
           // mode: 'CORS',
            body: JSON.stringify({value:value}),
            headers: {
            'Content-Type': 'application/json'
        }
    })
        //.then(res => res.text())
        //.then(res => this.setState({apiResponse: res}))
        ;

    }
  
    onClear = () => {
        this.setState({
            value: ""
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
                        
                <Link to = "/shop"><button onClick={()=>this.submit(value)}> Submit</button></Link>
                <p>{this.state.apiResponse}</p> 
                   </div>  
                
                </div>
        );
    }
}
export default App;