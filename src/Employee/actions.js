const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES_SUCCESS'
const LOAD_EMPLOYEES_REQUEST = 'LOAD_EMPLOYEES_REQUEST'
const LOAD_EMPLOYEES_FAILURE = 'LOAD_EMPLOYEES_SUCCESS'

const API_URL = 'http://localhost:3000/Employees'



/*export const loadEmployees = value => {
  return {
    type: LOAD_EMPLOYEES,
    value
  }
}*/

export function loadEmployees() {
  return function (dispatch) {
    dispatch({
      type: LOAD_EMPLOYEES_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_EMPLOYEES_SUCCESS,
          employees: data
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_EMPLOYEES_FAILURE,
          error: error
        })
      })
  }
}
