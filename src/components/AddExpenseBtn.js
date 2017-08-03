import React from 'react';
export default (props) => {
    return (
        <button type="button" onClick={ () => props.onAddExpense({
                                    value: 1,
                                    label: `Expense-${props.expenses.size}`
                                }) }>Add Expense</button>
        );
};