import React from 'react'
import DepartmentList from './DepartmentList'
import { connect } from 'react-redux'
import {loadDepartments} from './actions'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class DepartmentContainer extends React.Component {

  constructor(props){
    super(props);
  }


    componentDidMount() {
          this.props.loadDepartments()
    }

    render() {
        return (

          <div>

          <table className="table table-hover table-condensed table-light">
            <thead>
            <tr>
              <th scope="col" >ID</th>
              <th scope="col">Department Name</th>
            </tr>
            </thead>

            <DepartmentList id="departments" departments={this.props.departments} />

          </table>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  departments: state.Department.departments
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadDepartments: value => dispatch(loadDepartments(value)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer)
