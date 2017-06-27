import ExpensesView from '../views/ExpensesView';
import { Container } from 'flux/utils';
import ExpensesStore from '../data/ExpensesStore';

function getStores() {
    return [
        ExpensesStore,
    ];
}

function getState() {
    return {
        expenses: ExpensesStore.getState(),
    };
}

export default Container.createFunctional(ExpensesView, getStores, getState);