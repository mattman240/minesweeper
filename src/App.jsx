import React, { Component } from 'react';
import './App.css';
import Table from './table.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      row10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <Table data={this.state.row1} />
        <Table data={this.state.row2} />
        <Table data={this.state.row3} />
        <Table data={this.state.row4} />
        <Table data={this.state.row5} />
        <Table data={this.state.row6} />
        <Table data={this.state.row7} />
        <Table data={this.state.row8} />
        <Table data={this.state.row9} />
        <Table data={this.state.row10} />
      </div>
    );
  }
}

export default App;
