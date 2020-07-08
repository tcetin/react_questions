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



//4.Grocery App
const Product = props => {
  const [votes,setVotes]=React.useState(props.product.votes);
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    setVotes(votes+1);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    setVotes(votes-1);
  };
  return (
    <li>
      <span>{props.product.name}</span> - <span>votes: {votes} </span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    // Update the products array accordingly ...
  };

  return (
    <ul>
      {products.map((product)=>
        <Product product={product}/>
      )}
      {/* Render an array of products, which should call onVote when + or - is clicked */}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>"; 

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));

let plusButton = document.querySelector("ul > li > button");
if(plusButton) {
  plusButton.click();
}
console.log(document.getElementById('root').outerHTML)

//5. Image Gallery App


class ImageGallery extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        links:[]
      }
    this.removeLink = this.removeLink.bind(this);
  }
  componentDidMount(){
    this.setState({links:this.props.links});
  }
  removeLink(value){
    let newLinks = this.state.links.filter((link)=>link!==value);
    this.setState({links:newLinks});
  }
  render() {
    return (
      <div>
      {this.state.links.map((link,index)=>
        <div className="image" key={index}>
          <img src={link}/>
          <button onClick={()=>this.removeLink(link)} className="remove">X</button>
        </div>
      )}

    </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
ReactDOM.render(<ImageGallery links={ links } />,
                rootElement);
document.querySelectorAll('.remove')[0].click();
console.log(rootElement.innerHTML);
