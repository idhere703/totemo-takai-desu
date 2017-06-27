import ExpensesActionTypes from './ExpensesActionTypes';
import ExpensesDispatcher from './ExpensesDispatcher';

const Actions = {
    addExpense(expenseId, value) {
        ExpensesDispatcher.dispatch({
            type: ExpensesActionTypes.ADD_EXPENSE,
            expenseId,
            value
        });
    },
};

export default Actions;