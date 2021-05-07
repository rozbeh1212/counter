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

  render() {
    return (
      <React.Fragment>
        <image src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">{this.state.count}</span>
        <button className="btn btn-secondary btn-sm">'hello2'</button>
      </React.Fragment>
    );
  }
}

export default Counter;
