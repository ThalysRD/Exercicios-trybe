import React, {Component} from "react";

class Years extends Component {
    render(){
        const {value , handleChange} = this.props;
        let error = undefined;
        if (value.length > 3) {
            error = "Idade inválida";
        
        }
        
        return ( <label>
            <input name ="yearsOld" type="number" value={value} onInput={handleChange} placeholder="Years Old"></input>
            <span>{error ? error : ''}</span>
          </label>)
    }
}

export default Years