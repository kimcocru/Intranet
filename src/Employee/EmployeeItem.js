import React from 'react'
import PropTypes from 'prop-types'

class EmployeeItem extends React.Component {

    render() {
        return (
          <tr>
              <td id={this.props.employees.id}>{this.props.employees.idDepartment}</td>
              <td id={this.props.employees.id}>{this.props.employees.id}</td>
              <td id={this.props.employees.id}>{this.props.employees.name}</td>
              <td id={this.props.employees.id}>{this.props.employees.companyEmail}</td>
              <td id={this.props.employees.id}>{this.props.employees.personalEmail}</td>
              <td id={this.props.employees.id}>{this.props.employees.extension}</td>
              <td id={this.props.employees.id}>{this.props.employees.personalPhone}</td>
              <td id={this.props.employees.id}>{this.props.employees.role}</td>
        </tr>
        );
    }
}

EmployeeItem.propTypes = {
    employees: PropTypes.object
}

EmployeeItem.defaultProps = {
    employees: {}
}

export default EmployeeItem;
