import ExpensesActionTypes from './ExpensesActionTypes';
import ExpensesDispatcher from './ExpensesDispatcher';

const Actions = {
    addExpense(expense) {
        ExpensesDispatcher.dispatch({
            type: ExpensesActionTypes.ADD_EXPENSE,
            expense
        });
    },
    deleteExpense(id) {
        ExpensesDispatcher.dispatch({
            type: ExpensesActionTypes.DELETE_EXPENSE,
            id,
        });
    },
    editExpense(expense) {
        ExpensesDispatcher.dispatch({
            type: ExpensesActionTypes.EDIT_EXPENSE,
            expense,
        });
    },
};

export default Actions;