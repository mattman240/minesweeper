import React, { Component } from 'react';

class Table extends Component {

  handleClick(e, index) {
    const { data } = this.props;
    e.target.innerHTML = data[index];
  }

  render() {
    return (
      <div>
        <table>
   <tr>
     <td onClick={(e) => {this.handleClick(e, 0)}}></td>
     <td onClick={(e) => {this.handleClick(e, 1)}}></td>
     <td onClick={(e) => {this.handleClick(e, 2)}}></td>
     <td onClick={(e) => {this.handleClick(e, 3)}}></td>
     <td onClick={(e) => {this.handleClick(e, 4)}}></td>
     <td onClick={(e) => {this.handleClick(e, 5)}}></td>
     <td onClick={(e) => {this.handleClick(e, 6)}}></td>
     <td onClick={(e) => {this.handleClick(e, 7)}}></td>
     <td onClick={(e) => {this.handleClick(e, 8)}}></td>
     <td onClick={(e) => {this.handleClick(e, 9)}}></td>
   </tr>
 </table>
      </div>
    );
  }
}

export default Table;
