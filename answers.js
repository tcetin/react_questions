//https://www.testdome.com/d/react-js-interview-questions/304

//1. Toggle Message

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showParagraph:false
    }
    this.toggleParagraph = this.toggleParagraph.bind(this);
  }
  toggleParagraph(){
    this.setState({showParagraph:!this.state.showParagraph});
  }
  render() {
    
    return (<React.Fragment>
             <a href="#" onClick={this.toggleParagraph}>Want to buy a new car?</a>
             {this.state.showParagraph && <p>Call +11 22 33 44 now!</p>}
           </React.Fragment>);
  }
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);
    
    
//2. Focus    
import React, { Component } from 'react';
import { render } from 'react-dom';

class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true, 
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
componentDidUpdate(prevProps) {
    if(prevProps.focused != this.props.focused && this.props.focused){
      this.ref.current.focus();
    }
  }

  componentDidMount() {
    if(this.props.focused){
      this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
render(<App />, rootElement);
    
//3. Change Username
    
class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const ref = React.useRef();
  const inputRef = React.useRef();
  function clickHandler() {
    ref.current.changeValue(inputRef.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputRef} />
      <Username ref={ref} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

document.querySelector("input").value = "John Doe";
document.querySelector("button").click();
setTimeout(() => console.log(document.getElementById("root").innerHTML));
