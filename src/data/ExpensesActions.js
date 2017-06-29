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
        ExpenseDispatcher.dispatch({
            type: ExpenseActionTypes.DELETE_EXPENSE,
            id,
        });
    },
    editExpense(expense) {
        ExpenseDispatcher.dispatch({
            type: ExpenseActionTypes.EDIT_EXPENSE,
            expense,
        });
    },
};

export default Actions;