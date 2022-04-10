import React, { Component } from 'react';
import Name from './Name';
import Years from './Years';
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
      files: "",
      error: true,
    };
  }

  handleChange({target}) {
      const {name} = target
      const value = target.type === 'checkbox' ? target.checked : target.value 
      this.setState({
          [name]: value
      })
  }
 
  handleError() {
    const { fullName, yearsOld } = this.state;

    const errorCases = [
      !fullName.length,
      !yearsOld.length,
      
    ];
  
    const formCheck = errorCases.every((error) => error !== true)  

    this.setState({
      error: !formCheck
    })
  }

  
  render() {
    return (
      <div>
           <fieldset>
        <Name handleChange={this.handleChange} value={this.state.fullName} />
        <Years handleChange={this.handleChange} value={this.state.yearsOld} />
        <label>
          <select name="desejo" onChange={this.handleChange}> <option>Dormir</option>
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
