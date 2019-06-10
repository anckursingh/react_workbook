import React from 'react';
import './App.css';

class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {name :new Date(),
    arr : ['xyz','abc','ank']};
   
  }
  
  render(){
    return (<div>something is happening</div>);
  }
}
const tableStyle = {
  border: '5px solid pink'
};

const tableRowStyle = {
  border: '1px solid black'
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      tableHeaders:['id', 'name','age','email','gender'],
      tableDatas:[
      { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',gender:'m' },
      { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' ,gender:'f'},
      { id: 3, name: 'Saad', age: 16, email: 'saad@email.com',gender:'m' },
      { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' ,gender:'m'}]
    }
    // this.state = {name :new Date(),
    //   arr : ['xyz','abc','ank']};
      this.getTableRows= this.getTableRows.bind(this);
      this.getTableData= this.getTableData.bind(this);
  }

  
  getTableRows(){
    return this.state.tableDatas.map((arrelem, index) => {
       return(
         <tr key={index}>{this.getTableData(arrelem)}</tr>);
    })
  }

  getTableHeaders() {
    return this.state.tableHeaders.map((headers, index) => {
      return (
        <th key={index} style={tableRowStyle}>{headers}</th>
      );
    })
  }

  getTableData(tableData) {
    return this.state.tableHeaders.map((headers, index) => {
      return(
        <td key={index} style={tableRowStyle}>{tableData[headers]}</td>
      );
    });
  }

  getTable(){
    return(
      <tbody>
        <tr>{this.getTableHeaders()}</tr>
        {this.getTableRows()}
      </tbody>
    );
  }

  componentDidMount() {
    setInterval (()=> {
        this.setState({name:new Date()});
    }, 1000)
  }
  
  render(){
    return (<table style={tableStyle}>{this.getTable()}</table>);
  }
}

export default App;
