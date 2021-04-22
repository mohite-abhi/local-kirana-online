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
    //submit = () => {
      //  this.callAPI();
        
    //};
     /*getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };*/
    //submit=()=>  {
      // this.callAPI();
    //}    
         //console.log(value);
        /*fetch('https://localhost:9000/testApi', {
                method: 'GET',
                mode: 'CORS',
                //body: JSON.stringify(val),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
            };*/
   callAPI(value){
       console.log(value);
        fetch("http://localhost:9000/shopi",{
            method: 'POST',
           // mode: 'CORS',
            body: JSON.stringify({value:value}),
            headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        ;

    }
  //  componentWillMount(){
    //    this.callAPI();


    //}
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
                    // disabled
                    //secret/*<p>{this.state.apiResponse}</p>  
                    ref={(p) => (this.pin = p)}
                    type="numeric"
                    onChange={this.onChange}
                />
                
                
                <p>{value}</p>
                <div>
                <button onClick={this.onClear}>Clear</button>
                        
                <button onClick={()=>this.callAPI(value)}> Submit</button>
                <p>{this.state.apiResponse}</p> 
                   </div>  
                
                </div>
        );
    }
}
export default App;