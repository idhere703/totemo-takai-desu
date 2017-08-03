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