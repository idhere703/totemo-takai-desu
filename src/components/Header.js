import React from 'react';
export default (props) => {
    if (props.expenses.size === 0) {
        return null;
    }
    return (
        <header>
          <h1>Expenses</h1>
        </header>
        );
}