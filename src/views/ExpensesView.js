import React from 'react';
import FileUpload from '../components/FileUpload';
const ExpensesView = (props) => {
    return <div>
             <Header {...props} />
             <AddExpenseBtn {...props} />
             <FileUploadField {...props} />
             <Main {...props} />
             <Footer {...props} />
           </div>;
};

export default ExpensesView;


const Header = (props) => {
    if (props.expenses.size === 0) {
        return null;
    }
    return (
        <header>
          <h1>Expenses</h1>
        </header>
        );
}

const Main = (props) => {
    const expenses = [...props.expenses.values()].reverse();
    if (expenses.length === 0) {
        return null;
    }
    return (
        <section>
          <ul>
            { expenses.map(expense => (
                  <li key={ expense.id }>
                    <label>
                      { expense.label || `Expense: ${expense.id}` }
                    </label>
                    <div>
                      <input type="number" onChange={ (event) => {
                                                          const value = event.target.value;
                                                          props.onEditExpense({
                                                              value,
                                                              id: expense.id
                                                          });
                                                      } } />
                      <span onClick={ event => props.onDeleteExpense(expense.id) } className="fa fa-remove clickable"></span>
                    </div>
                  </li>
              )) }
          </ul>
        </section>
        );
}

const Footer = (props) => {
    if (props.expenses.size === 0) {
        return null;
    }
    let total = 0;
    [...props.expenses.values()].forEach((expense) => total += parseFloat(expense.value));
    return (
        <footer>
          <span>{ 'Total:' }<strong>{ total }</strong></span>
        </footer>
        );
}

const AddExpenseBtn = (props) => {
    return (
        <button type="button" onClick={ () => props.onAddExpense({
                                    value: 1,
                                    label: `Expense-${props.expenses.size}`
                                }) }>Add Expense</button>
        );
};


const FileUploadField = (props) => {
    const options = {
        baseUrl: 'http://127.0.0.1',
        param: {
            fid: 0
        }
    };
    return (
        <FileUpload options={ options }>
          <button>choose</button>
          <button>upload</button>
        </FileUpload>
        );
};