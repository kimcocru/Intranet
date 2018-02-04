import React from 'react'
import EmployeeList from './EmployeeList'
import { connect } from 'react-redux'
import {loadEmployees} from './actions'

class EmployeeContainer extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
      this.props.loadEmployees()
    }

    render() {
        return (
          <div>
          <table className="table table-hover table-condensed table-light">
            <thead>
            <tr>
              <th scope="col">ID Department</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Company Email</th>
              <th scope="col">Personal Email</th>
              <th scope="col">Extension</th>
              <th scope="col">Personal Phone</th>
              <th scope="col">Role</th>
            </tr>
            </thead>

            <EmployeeList id="employees" employees={this.props.employees} />

          </table>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    //aca no se maneja estado por el momento
  employees: state.Employee.employees

  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadEmployees: value => dispatch(loadEmployees(value)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)
