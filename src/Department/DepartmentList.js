import React from 'react'
import PropTypes from 'prop-types'
import DepartmentItem from './DepartmentItem'

class DepartmentList extends React.Component {


    render() {
        var props = this.props

        return (

              <tbody>
                {
                    props.departments.map(function (item) {
                    return <DepartmentItem key={item.id} departments={item}/>

                    })
                }

              </tbody>

        );

    }


}

DepartmentList.propTypes = {
    departments: PropTypes.array
}

DepartmentList.defaultProps = {
    departments: []
}

export default DepartmentList;
