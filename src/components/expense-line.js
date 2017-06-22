import React from 'react';

class ExpenseLine extends React.Component {

    render() {
        return (
            <div>
              <div>
                { this.props.expense.label }
              </div>
              <input value={ this.props.expense.amount } />
            </div>);
    }
}

export default ExpenseLine;