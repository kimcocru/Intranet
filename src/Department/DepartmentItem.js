import React from 'react'
import PropTypes from 'prop-types'

class DepartmentItem extends React.Component {

    render() {
        return (
            <tr scope="row">

                
                <td id={this.props.departments.id}>{this.props.departments.id}</td>
                <td id={this.props.departments.id}>{this.props.departments.name}</td>
          </tr>
        );
    }
}

DepartmentItem.propTypes = {
    departments: PropTypes.object
}

DepartmentItem.defaultProps = {
    departments: {}
}

export default DepartmentItem;
