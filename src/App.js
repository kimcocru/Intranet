import React from 'react';
import DepartmentContainer from './Department/DepartmentContainer'
import EmployeeContainer from './Employee/EmployeeContainer'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'


export default class App extends React.Component {
  render() {
    return (
     <div>
     <header className='container-fluid'>
     
     <nav className="navbar navbar-expand-md navbar-toggleable-md bg-dark navbar-dark ">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
      <a className="navbar-brand" href="#">IntraNET</a>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
           <NavLink to="/" className='nav-item nav-link active'>Home</NavLink>
            <NavLink to="/departments" className=' nav-item nav-link active'>Departments</NavLink>

             <NavLink to="/employees" className='nav-item nav-link active'>Employees</NavLink>
         </div>
       </div>
     </nav>
     </header>

     <div className='container-fluid'>
     <main>
     <Switch>
     <Route exact path="/" component={DepartmentContainer,EmployeeContainer} />
      <Route exact path="/departments" component={DepartmentContainer} />
       <Route exact path="/employees" component={EmployeeContainer} />
     </Switch>
     </main>
     </div>
      </div>);
  }
}
