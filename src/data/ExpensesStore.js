import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import ExpensesActionTypes from './ExpensesActionTypes';
import ExpensesDispatcher from './ExpensesDispatcher';
import Counter from './Counter';

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
            case TodoActionTypes.ADD_TODO:
                // Don't add expense with no value.
                if (!action.value) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id,
                    value: action.value,
                    category: action.category,
                }));

            default:
                return state;
        }
    }
}

export default new ExpensesStore();