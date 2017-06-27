import React from 'react';

class ExpenseLine extends React.Component {



  render() {
    return (
      <div>
        <div>
          { this.props.expense.label }
        </div>
        <input type="number" onChange={ () => {
                                          this.props.expenseChange(this.props.expense.id, this)
                                        } } />
      </div>);
  }
}

export default ExpenseLine;