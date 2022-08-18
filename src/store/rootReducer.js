import { combineReducers } from 'redux'
import balanceReducer from './balance'
import caseReducer from './cases'
import inventoryReducer from './inventory'

export const rootReducer = combineReducers({
    cases: caseReducer,
    inventories: inventoryReducer,
    balance: balanceReducer,
})