import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import InputGroup from 'react-bootstrap/InputGroup';


const scope = {InputGroup};


class Addon23 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<div>
                                           <InputGroup size="sm" >
                                             <p>  -InputGroup.x aria-label="x for following text input"- x=Checkbox or x=Radio</p>
                                                  <InputGroup.Prepend>
                                                     <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                  </InputGroup.Prepend>
                                           </InputGroup> </div>' scope={scope} >
                </FiddleComponent>
            </div>
        );
    }
}

export default Addon23;