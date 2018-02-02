const DEFAULT_STATE = {
  departments: []
}

const departments = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'LOAD_DEPARTMENTS_SUCCESS':
    return{...state,
      departments: [...action.departments]
    }
    case 'LOAD_DEPARTMENTS_REQUEST':
    return{
      ...state
    }
    case 'LOAD_DEPARTMENTS_FAILURE':
    return{
      ...state,
      error: action.error
    }
    default:
      return state
  }
}

export default departments
