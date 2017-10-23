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
                      Use negative values to represent gains. Click the spacebar to add an expense; buttons are for noobs.
                    </p>
                  </div>);
  }
  return (
    <section>
      <div>
        { expenses.map(expense => (
            <div className="row" key={ expense.id }>
              <div className="col col-6">
                <input className="App--input-label" name="expense-line-item-name" type="text" placeholder={ expense.label || `Expense: ${expense.id}` } />
              </div>
              <div className="col col-6">
                <input className="App--input-expense" type="number" step="0.01" onChange={ (event) => props.onEditExpense({
                                                                                             value: event.target.value,
                                                                                             id: expense.id
                                                                                           }) } name="expense-line-item" />
                <span onClick={ event => props.onDeleteExpense(expense.id) } className="fa fa-remove clickable"></span>
              </div>
            </div>
          )) }
      </div>
    </section>
    );
}