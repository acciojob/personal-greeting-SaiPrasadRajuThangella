import React,{ Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ""};
    
  }

  render() {
     const greetingFunc = (event) => {
      const userInput = event.target.value;
      this.setState({ text: userInput });
      
    };

    return (
      <>
        <label htmlFor="input">Enter your name:</label>
        <input id="input" type="text" onChange={greetingFunc} />
        {this.state.text ? <p>Hello {this.state.text} !</p>:null}
      </>
    );
  }
}

export default Greeting;
