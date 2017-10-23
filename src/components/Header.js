import React from 'react';
import FileUpload from './FileUpload';
import AddExpenseBtn from './AddExpenseBtn';

export default (props) => {
  return (
    <header className="App-header row">
      <div className="col col-6">Expenses</div>
      <div className="col">
        <AddExpenseBtn {...props} />
      </div>
      <div className="col">
        <FileUpload {...props} />
      </div>
    </header>
    );
}