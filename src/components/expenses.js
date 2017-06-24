import React from 'react';
import ExpenseLine from './expense-line';

class Expenses extends React.Component {

    constructor() {
        super();
        this.state = {
            expenses: []
        };
    }

    addExpense() {
        this.state.expenses.push({
            label: '',
            amount: 0,
            category: null,
            id: this.state.expenses.length
        });
    }

    expenseChange(expenseId, value) {
        this.state.expenses[expenseId].amount = value;
    }

    render() {
        return (
            <div>
              { this.state.expenses.map((expense) => {
                    return (<ExpenseLine expense={ expense } />);
                }) }
              <button onClick={ this.addExpense }>Add expense</button>
            </div>);
    }
}

export default Expenses;