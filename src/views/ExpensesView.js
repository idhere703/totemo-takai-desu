import React from 'react';
const ExpensesView = (props) => {
    return <div>
             <Header {...props} />
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
                      <input type="number" onChange={ () => {
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
          <span>
        { 'Total:' }
        <strong>
            { props.expenses.reduce((tot, expense) => tot += expense.value) }
        </strong>
        </span>
        </footer>
        );
}