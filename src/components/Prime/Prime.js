import React from "react";
import "./Prime.css";

const MAX_INPUT = 100000;

class Prime extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      result: 0,
      history: []
    };
  }

  updateInputValue(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  }

  getNthPrimeNumber() {
    const number = Number(this.state.inputValue);
    if (number === "") return;

    // Iterate until it finds the right prime number
    let count = 0;
    for (var i = 2; i <= MAX_INPUT; i++) {
      if (this.isPrime(i)) {
        count++;
      }
      if (count === number) {
        this.setState({
          result: i,
          history: [...this.state.history, { input: number, output: i }]
        });
        return;
      }
    }

    // If nothing is returned, set the result back to initial state
    this.setState({
      result: 0
    });
  }

  isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  render() {
    const history = this.state.history.map((item, i) => {
      return (
        <li key={i}>
          Input: {item.input}, Output: {item.output}
        </li>
      );
    });

    return (
      <div className="prime">
        <h1>Prime Number Search Engine</h1>
        <div className="prime__inputs">
          <div>
            <input
              placeholder="Nth prime number"
              type="number"
              value={this.state.inputValue}
              onChange={e => this.updateInputValue(e)}
            />
            <button onClick={() => this.getNthPrimeNumber()}>OK</button>
          </div>
          <label>Result: {this.state.result}</label>
        </div>
        <div>
          <h2>Search History</h2>
          <ul>{history}</ul>
        </div>
      </div>
    );
  }
}
export default Prime;
