import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
   
    this.state = {
      fullName: "",
      yearsOld: "",
      desejo: "",
      motivosParaDormir: "",
      dormindo: false,
      files: ""
    };
  }

  handleChange({target}) {
      const {name} = target
      const value = target.type === 'checkbox' ? target.checked : target.value 
      this.setState({
          [name]: value
      })
  }
 
  
  render() {
    return (
      <div>
           <fieldset>
        <label>
           
          <input name ="fullName" type="text" onInput={this.handleChange} placeholder="Full Name" ></input>
        </label>
        <label>
          <input name="yearsOld"type="number" onChange={this.handleChange} placeholder="Years old" ></input>
        </label>
        <label>
          <select name="desejo" onChange={this.handleChange} > <option>Dormir</option>
          <option>Acordar</option></select>
        </label>
        <label>
          <textarea name='motivosParaDormir' onChange={this.handleChange}></textarea>
        </label>
        <label>
            <input name="dormindo" type="checkbox" onChange={this.handleChange}></input>
        </label>
        <label>
            <input name="files" type="file" onChange={this.handleChange} />
        </label>
        </fieldset>
      </div>
    );
  }
}

export default Forms;
