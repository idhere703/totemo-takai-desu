import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import ExpensesActionTypes from './ExpensesActionTypes';
import ExpensesDispatcher from './ExpensesDispatcher';
import Counter from './Counter';
import Expense from './Expense';

class ExpensesStore extends ReduceStore {
    constructor() {
        super(ExpensesDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ExpensesActionTypes.ADD_EXPENSE:
                const id = Counter.increment();
                return state.set(id, new Expense({
                    id,
                    value: action.value || 0,
                    category: action.category || '',
                    label: action.label || ''
                }));
            case ExpensesActionTypes.DELETE_EXPENSE:
                return state.delete(action.id);

            case ExpensesActionTypes.EDIT_EXPENSE:
            // return state.update({
            //     ...action.expense
            // });
            default:
                return state;
        }
    }
}

export default new ExpensesStore();