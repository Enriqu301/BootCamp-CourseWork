import React, { Component } from 'react';
import from bucketlist "./Component/bucketlist";
import './App.css';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      bucket: [
        {
          name: 'Dance in Mexico',
          id: 122, 
          completed: false
        },
        {
          name: 'Nuclear Energy',
          id: 412, 
          completed: false
        },
        {
          name: 'fly high ',
          id: 611, 
          completed: false
        },
      ]
    }
  }




  render() {
    console.log(this.state);
    return (
    <div className="App">
      <header className="App-header">
        <h1> This is my BucketList</h1>
      </header>
    </div>

    );
  }
}

export default App;
