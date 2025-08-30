import React, { Component } from 'react';
class InputComponent extends Component {
constructor(props) {
super(props);
this.state = {
inputValue: '',
};
}
handleInputChange = (event) => {
this.setState({
inputValue: event.target.value,
});
};
render() {
return (

<div>
<h2>Input Box Value</h2>
<input
type="text"
placeholder="Enter something..."
value={this.state.inputValue}
onChange={this.handleInputChange}
/>
<p>You typed: {this.state.inputValue}</p>
</div>
);
}
}
export default InputComponent;