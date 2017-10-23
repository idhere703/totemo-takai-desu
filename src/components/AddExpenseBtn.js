import React from 'react';
export default (props) => {
    // capture keyboard input
    document.onkeypress = (e) => {
        console.log(e);
        if (e.keyCode === 32 && e.target.name !== 'expense-line-item-name') {
            // check if an input is currently in focus
            // if (document.activeElement.nodeName.toLowerCase() != "input") {
            // prevent default spacebar event (scrolling to bottom)
            e.preventDefault();
            console.log('Event detected');
            props.onAddExpense({
                value: 1,
                label: `Expense-${props.expenses.size}`
            });
            // Shift focus to new event line item.
            const expenseItem = document.getElementsByName("expense-line-item")[0];
            if (expenseItem) expenseItem.focus();
        // }
        }
    };
    return (
        <button type="button" className="button small" onClick={ () => props.onAddExpense({
                                                             value: 1,
                                                             label: `Expense-${props.expenses.size}`
                                                         }) }>Add Expense</button>
        );
};