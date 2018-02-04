import React from 'react'
import EmployeeList from './EmployeeList'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {loadEmployees} from './actions'

const selectRowProp = {
mode: 'checkbox',
clickToSelect: true  // enable click to select
};
function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}

function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

const options = {
  insertText: 'Add Employee',
    deleteText: 'Remove Employee',

};

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
          <BootstrapTable data={this.props.employees} striped={true} hover={true}  selectRow={ selectRowProp }  options={ options } insertRow
         deleteRow>
             <TableHeaderColumn dataField="idDepartment" dataSort={true}>ID Department</TableHeaderColumn>
             <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Employee ID</TableHeaderColumn>
             <TableHeaderColumn dataField="name" dataSort={true}>Employee Name</TableHeaderColumn>
             <TableHeaderColumn dataField="companyEmail"  dataAlign="center" dataSort={true}>Company Email</TableHeaderColumn>
             <TableHeaderColumn dataField="personalEmail" dataSort={true}>Personal Email</TableHeaderColumn>
             <TableHeaderColumn dataField="extension"  dataAlign="center" dataSort={true}>Extension</TableHeaderColumn>
             <TableHeaderColumn dataField="personalPhone" dataSort={true}>Personal Phone</TableHeaderColumn>
             <TableHeaderColumn dataField="role"  dataAlign="center" dataSort={true}>Role</TableHeaderColumn>

          </BootstrapTable >
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
