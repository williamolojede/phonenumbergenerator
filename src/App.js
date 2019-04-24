import React, { Component } from 'react';

import NumbersGeneratorForm from './components/NumbersGeneratorForm';
import GeneratedNumberStats from './components/GeneratedNumbersStats';
import GeneratedNumbersTable from './components/GeneratedNumbersTable';
import Sort from './components/Sort';

class App extends Component {
  state = {
    numbers: [],
    max: 0,
    min: 0,
    phoneNumbersGenerated: false
  }

  handleGeneratedNumbers = (numbers) => {
    this.setState({
      numbers,
      min: Math.min(...numbers),
      max: Math.max(...numbers),
      phoneNumbersGenerated: true
    })
  }

  handleSort = (dir) => () => {
    const { numbers } = this.state;

    numbers.sort((a, b) => {
      const sortDirs = {
        'asc': a - b,
        'dsc': b - a,
      }
      return sortDirs[dir];
    })
  
    this.setState({ numbers });
  }

  render() {
    const { numbers, max, min, phoneNumbersGenerated } = this.state;
    return (
      <div className="bg-grey-lighter min-h-screen">
        <header className="bg-purple-darker p-6 shadow-md">
          <div className="container mx-auto">
            <h3 className="text-white  text-center uppercase text-3xl">Phone number generator</h3>
          </div>
        </header>
        <main className="p-6 flex flex-col md:flex-row items-center md:items-start">
          <section className="container md:max-w-xs">
            <div className="bg-white shadow-md p-6 rounded-sm">
              
              <NumbersGeneratorForm handleGeneratedNumbers={this.handleGeneratedNumbers}/>
              {
                phoneNumbersGenerated && (
                  <React.Fragment>
                    <hr className="h-px my-6 bg-grey-light"/>

                    <GeneratedNumberStats count={numbers.length} min={min} max={max} />
    
                    <hr className="h-px my-6 bg-grey-light"/>

                    <Sort handleSort={this.handleSort}/>
                  </React.Fragment>
                )
              }
            </div>
          </section>
          <section className="container md:ml-6">
            <h3 className="py-6 md:pt-0 uppercase text-center">phone number list</h3>
            <GeneratedNumbersTable numbers={numbers}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
