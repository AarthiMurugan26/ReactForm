
import './App.css';
import { Table } from './Table';
import { ReactForm } from './form';
import React from 'react';

function App() {
  const [table, setTable] = React.useState([])
  const formSubmit = (formValues) => {
    setTable([...table, formValues])
  }
  return (
    <div className='App-header'>
      <ReactForm onSubmit={formSubmit} /> <br /><br />
      <Table data={table} />
    </div>

  );
}

export default App;
