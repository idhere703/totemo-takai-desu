import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ExpensesView = (props) => {
  return <div>
           <Header {...props} />
           <Main {...props} />
           <Footer {...props} />
         </div>;
};

export default ExpensesView;

const Main = (props) => {
  const expenses = [...props.expenses.values()].reverse();
  if (expenses.length === 0) {
    return (      <div>
                    <p className="App--no-content">
                      Click the spacebar to add an expense. Buttons are for noobs.
                    </p>
                  </div>);
  }
  return (
    <section>
      <ul>
        { expenses.map(expense => (
            <li key={ expense.id }>
              <input name="expense-line-item-name" type="text" placeholder={ expense.label || `Expense: ${expense.id}` }>
              { /* { expense.label || `Expense: ${expense.id}` } */ }
              </input>
              <div>
                <input type="number" onChange={ (event) => props.onEditExpense({
                                                  value: event.target.value,
                                                  id: expense.id
                                                }) } name="expense-line-item" />
                <span onClick={ event => props.onDeleteExpense(expense.id) } className="fa fa-remove clickable"></span>
              </div>
            </li>
          )) }
      </ul>
    </section>
    );
}