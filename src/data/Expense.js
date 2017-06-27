import Immutable from 'immutable';

const Expense = Immutable.Record({
    id: '',
    category: '',
    value: 0,
    label: ''
});

export default Expense;