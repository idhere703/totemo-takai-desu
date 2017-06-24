import React from 'react';

class ExpenseLine extends React.Component {



  render() {
    return (
      <div>
        <div>
          { this.props.expense.label }
        </div>
        <input onChange={ () => {
                            this.props.expenseChange(this.props.expense.id, this.props.expense.amount)
                          } } value={ this.props.expense.amount } />
      </div>);
  }
}

export default ExpenseLine;