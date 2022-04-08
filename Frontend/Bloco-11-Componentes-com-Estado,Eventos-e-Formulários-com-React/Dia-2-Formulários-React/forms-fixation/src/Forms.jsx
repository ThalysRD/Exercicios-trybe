import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.handleName = this.handleName.bind(this);
    this.handleYear = this.handleYear.bind(this)
    this.state = {
      name: "",
      year: "",
    };
  }

  handleName(event) {
      this.setState({
          name: event.target.value
      })
  }
 
  handleYear(event){
    this.setState({
        year: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <label>
          <input type="text" onInput={this.handleName} placeholder="Full Name" ></input>
        </label>
        <label>
          <input type="number" onChange={this.handleYear} placeholder="Years old" ></input>
        </label>
        <label>
          <select></select>
        </label>
        <label>
          <textarea></textarea>
        </label>
      </div>
    );
  }
}

export default Forms;
