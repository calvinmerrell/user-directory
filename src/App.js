
import React, {Component} from "react"
import './App.css';
import Header from './Header';
import EmployeeContainer from "./EmployeeContainer";
import Pageturn from './Pageturn'
import Data from './Data'

class App extends Component {
  constructor() {
    super()
    this.state = {
        index: 0
    }
}

handlePrevious= (index, arr) => {
    if(this.state.index === 0){
        this.setState({index:Data.length - 1})
    }
    else{
        this.setState({index:this.state.index - 1})
    }
}

handleNext=(index, arr) => {
    if(this.state.index === Data.length -1){
        this.setState({index:0})
    }
    else{
        this.setState({index:this.state.index + 1})
    }
  }
  render() {
    return (
      <div className="body">
        <div id="header"> < Header /></div>
        <div id="main"> < EmployeeContainer index={this.state.index}/></div>
        < Pageturn previousFn={this.handlePrevious}  nextFn={this.handleNext}/>
      </div>
    )
  }
}
export default App;
        
