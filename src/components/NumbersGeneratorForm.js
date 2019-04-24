import React, { Component } from 'react'

export default class NumbersGeneratorForm extends Component {
  inputEl = React.createRef();
  
  handlesubmit = (e) => {
    const total = Number(this.inputEl.current.value)
    e.preventDefault();
    const numbers = this.generateRandomNumbers(total);
    this.props.handleGeneratedNumbers(numbers);
  }

  generateRandomNumber = () => {
    return Math.floor(Math.random() * Math.pow(10, 8)) + Math.pow(10, 8)
  }

  generateRandomNumbers = (count) => {
    const numbers = [];
    for (let i = 0; i < count; i += 1) {
      numbers.push(this.generateRandomNumber());
    }
    return numbers;
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit} >
        <p className="uppercase mb-6 text-center text-grey-dark">Enter the number of phone numbers to be generated</p>

        <div className="flex justify-between">
          <input 
            type="number" 
            ref={this.inputEl}
            className="border-b-2 border-grey-darker text-5xl w-32 text-center"
            required
            max="500"
            min="10"
          />


          <button type="submit" className="border-2 border-grey-darker p-4 w-1/2 text-xl font-bold uppercase text-grey-darker">Generate</button>
        </div>
      </form>
    )
  }
}