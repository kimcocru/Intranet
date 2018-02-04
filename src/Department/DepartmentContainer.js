import React from 'react'
import DepartmentList from './DepartmentList'
import { connect } from 'react-redux'
import {loadDepartments} from './actions'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
  insertText: 'Add Department',
    deleteText: 'Remove Department',
};

class DepartmentContainer extends React.Component {

  constructor(props){
    super(props);
  }

    componentDidMount() {
          this.props.loadDepartments()
    }
/////////////////////borrar y añadir un row
    render() {
        return (
          <div>
         <BootstrapTable data={this.props.departments} striped={true} hover={true}   selectRow={ selectRowProp }  options={ options } insertRow
        deleteRow>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Department ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Department Name</TableHeaderColumn>
         </BootstrapTable >
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
