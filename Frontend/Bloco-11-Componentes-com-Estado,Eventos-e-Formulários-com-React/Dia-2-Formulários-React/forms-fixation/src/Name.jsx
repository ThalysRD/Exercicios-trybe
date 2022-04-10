import React, { Component} from "react";

class Name extends Component {
    render(){
        const {value , handleChange} = this.props;
        let error = undefined;
        if( value.length > 120){
            error = "Nome grande do carai KKKKKKK"
        }
        return ( <label>
           
            <input name ="fullName" type="text"  value={value} onInput={handleChange} placeholder="Full Name" ></input>
            <span>{error ? error : ''}</span>
          </label>)
    }
}

export default Name