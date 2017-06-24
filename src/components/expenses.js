import React from 'react';
import ExpenseLine from './expense-line';

class Expenses extends React.Component {

    constructor() {
        super();
        this.state = {
            expenses: []
        };

        this.addExpense = this.addExpense.bind(this);
        this.expenseChange = this.expenseChange.bind(this);
    }

    addExpense() {
        const expenses = this.state.expenses;
        expenses.push({
            label: '',
            amount: 0,
            category: null,
            id: this.state.expenses.length
        });
        this.setState({
            expenses
        });
    }

    expenseChange(expenseId, value) {
        const expenses = this.state.expenses;
        expenses[expenseId].amount = value;
        this.setState({
            expenses
        })
    }

    render() {
        return (
            <div>
              { this.state.expenses.map((expense) => {
                    return (<ExpenseLine expense={ expense } expenseChange={ this.expenseChange } />);
                }) }
              <button onClick={ this.addExpense }>Add expense</button>
            </div>);
    }
}

export default Expenses;