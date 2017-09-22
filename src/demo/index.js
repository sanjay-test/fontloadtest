import React from "react";
import { render } from "react-dom";
//Import your Library components for Demo

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    loadNewComponent(name){
        if(name == 'block'){
            require(`./../lib/${name}`);
        }
    }

    render(){
        this.loadNewComponent(this.state.name);
        return(
            <div>
                <div><span style={{
                    fontWeight:700,
                    fontSize:15,
                    fontFamily: "Open Sans,sans-serif",
                    lineHeight:"22px",
                    color:"#3f3f3f"
                }}>Open Sans Text</span></div>
                <div><button onClick={()=> this.setState({name:"block"})}>Load Google Open Sans</button></div>
            </div>
        );
    }
}

render((<App></App>), document.getElementById("app"));

