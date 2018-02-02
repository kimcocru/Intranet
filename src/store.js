import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import DepartmentReducer from './Department/DepartmentReducer'

import EmployeeReducer from './Employee/EmployeeReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const store = createStore(combineReducers({Department: DepartmentReducer,Employee: EmployeeReducer}),composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger,
  ),
))

export default store
