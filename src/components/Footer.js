import React from 'react';
export default (props) => {
    if (props.expenses.size === 0) {
        return null;
    }
    let total = 0;
    [...props.expenses.values()].forEach((expense) => total += parseFloat(expense.value));
    return (
        <footer className="App-footer">
          <span>{ 'Total:' }<strong>{ total.toFixed(2) }</strong></span>
        </footer>
        );
}