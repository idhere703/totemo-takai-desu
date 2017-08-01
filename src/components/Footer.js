import React from 'react';
export default (props) => {
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