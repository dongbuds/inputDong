import React, { Component } from 'react';

class AddTwoNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      total: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  calculateSum = () => {
    const { number1, number2 } = this.state;
    const sum = Number(number1) + Number(number2);
    this.setState({ total: sum });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Add two numbers</h2>
        <div>
          <label>
            Number 1:{' '}
            <input
              type="number"
              name="number1"
              value={this.state.number1}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Number 2:{' '}
            <input
              type="number"
              name="number2"
              value={this.state.number2}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <br />
        <button onClick={this.calculateSum}>Calculate</button>
        {this.state.total !== null && (
          <p>Total: {this.state.total}</p>
        )}
      </div>
    );
  }
}

export default AddTwoNumbers;
//dong