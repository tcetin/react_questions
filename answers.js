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
