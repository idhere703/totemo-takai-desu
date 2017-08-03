import React from 'react';
import FileUpload from './FileUpload';
import AddExpenseBtn from './AddExpenseBtn';

export default (props) => {
  return (
    <header className="App-header">
      <div>Expenses</div>
      <div>
        <AddExpenseBtn {...props} />
      </div>
      <div>
        <FileUpload {...props} />
      </div>
    </header>
    );
}