import React from 'react';
const ExpensesView = (props) => {
    return <div>
             <Header {...props} />
             <AddExpenseBtn {...props} />
             <Main {...props} />
             { /*<Footer {...props} />*/ }
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
    if (props.expenses.size === 0) {
        return null;
    }
    return (
        <section>
          <ul>
            { [...props.expenses.values()].reverse().map(expense => (
                  <li key={ expense.id }>
                    <label>
                      { expense.label }
                    </label>
                    <div>
                      <input type="number" onChange={ (event) => {
                                                          const value = event.target.value;
                                                          props.onEditExpense({
                                                              value,
                                                              id: expense.id
                                                          });
                                                      } } />
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
    return (
        <footer>
          <span>{ 'Total:' }<strong>{ [...props.expenses.values()].reduce((tot, expense) => tot += expense.value) }</strong></span>
        </footer>
        );
}

const AddExpenseBtn = (props) => {
    return (
        <button type="button" onClick={ () => props.onAddExpense({
                                    value: 0,
                                    label: `Expense-${props.expenses.size}`
                                }) }>Add Expense</button>
        );
};