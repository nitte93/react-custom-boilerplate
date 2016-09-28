import React, {Component} from 'react';
import { render } from 'react-dom'

class Hello extends Component{
  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
};

render(<Hello />, document.getElementById('root'));
