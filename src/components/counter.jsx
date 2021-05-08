import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

styles ={ 
   fontSize: '10px',
   fontWight:'bold'  
};


handleIncrement(){



}

  render() {



    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">'hello2'</button>
      </React.Fragment>
    );
  }

formatCount(){

const {count} = this.state;
return count === 0 ? "zero" : count;


}

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
