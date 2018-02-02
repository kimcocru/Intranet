const LOAD_DEPARTMENTS_SUCCESS = 'LOAD_DEPARTMENTS_SUCCESS'
const LOAD_DEPARTMENTS_REQUEST = 'LOAD_DEPARTMENTS_REQUEST'
const LOAD_DEPARTMENTS_FAILURE = 'LOAD_DEPARTMENTS_FAILURE'

const API_URL = 'http://localhost:3000/Departments'



/*export const loadDepartments = value => {
  return {
    type: LOAD_DEPARTMENTS,
    value
  }
}*/


export function loadDepartments() {
  return function (dispatch) {
    dispatch({
      type: LOAD_DEPARTMENTS_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_DEPARTMENTS_SUCCESS,
          departments: data
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_DEPARTMENTS_FAILURE,
          error: error
        })
      })
  }
}
