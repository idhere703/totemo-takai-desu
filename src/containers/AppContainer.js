import ExpensesView from '../views/ExpensesView';
import { Container } from 'flux/utils';
import ExpensesStore from '../data/ExpensesStore';
import ExpensesActions from '../data/ExpensesActions';

function getStores() {
    return [
        ExpensesStore,
    ];
}

function getState() {
    return {
        expenses: ExpensesStore.getState(),
        onAddExpense: ExpensesActions.addExpense,
        onDeleteExpense: ExpensesActions.deleteExpense,
        onEditExpense: ExpensesActions.editExpense,
    };
}

export default Container.createFunctional(ExpensesView, getStores, getState);