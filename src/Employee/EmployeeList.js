import React from 'react'
import PropTypes from 'prop-types'
import EmployeeItem from './EmployeeItem'

class EmployeeList extends React.Component {


    render() {
        var props = this.props

        return (
              <tbody>
                {
                    props.employees.map(function (item) {
                      return <EmployeeItem key={item.id} employees={item} />

                    })
                }
            </tbody>
        );

    }


}

EmployeeList.propTypes = {
    employees: PropTypes.array
}

EmployeeList.defaultProps = {
    employees: []
}

export default EmployeeList;
