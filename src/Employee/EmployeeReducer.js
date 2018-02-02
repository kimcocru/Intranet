const DEFAULT_STATE = {
  employees: [],
  error: ''
}

const employees = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'LOAD_EMPLOYEES_SUCCESS':
    return{...state,
      employees: [...action.employees]
    }
    case 'LOAD_EMPLOYEES_REQUEST':
    return {
      ...state
    }
    case 'LOAD_EMPLOYEES_FAILURE':
    return {
      ...state,
      error: action.error
    }
    default:
      return state
  }
}

export default employees
