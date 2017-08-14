import React from 'react';
import FileUpload from './FileUpload';
import AddExpenseBtn from './AddExpenseBtn';

export default (props) => {
  return (
    <header className="App-header">
      <div>Expenses</div>
      <div className="App-header--add-expense">
        <AddExpenseBtn {...props} />
      </div>
      <div className="App-header--upload-btn">
        <FileUpload {...props} />
      </div>
    </header>
    );
}