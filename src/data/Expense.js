import Immutable from 'immutable';

const Expense = Immutable.Record({
    id: '',
    category: '',
    value: 0,
    label: '',
    recurring: 0,
});

export default Expense;