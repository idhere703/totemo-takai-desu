import React from 'react';
import ExpenseLine from './expense-line';

class Expenses extends React.Component {

    constructor() {
        this.state = {
            expenses: []
        };
    }

    addExpense() {
        this.state.expenses.push({
            label: '',
            amount: 0,
            category: null
        });
    }

    render() {
        return (
            <div>
              { this.state.expenses.map((expense) => {
                    return (<ExpenseLine expense={ expense } />);
                }) }
              <button onClick={ addExpense }>Add expense</button>
            </div>);
    }
}

export default Expenses;