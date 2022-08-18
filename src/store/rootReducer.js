import { combineReducers } from 'redux'
import caseReducer from './cases'
import inventoryReducer from './inventory'

export const rootReducer = combineReducers({
    cases: caseReducer,
    inventories: inventoryReducer,
})