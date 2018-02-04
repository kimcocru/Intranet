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
    <div id="navbar-wrapper">
        <header>
        <nav className="navbar navbar-expand-md navbar-toggleable-md nav-back navbar-dark" >
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div>
     <a className="navbar-brand" href="#">
        <img src="./assets/logo1.png" width="180" height="50" alt=""/>
     </a>
     </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ml-auto">
                           <li className="dropdown">
                               <a id="user-profile" href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="./assets/user.png" width="40" height="40" className="img-responsive img-thumbnail img-circle"/> Username</a>
                               <ul className="dropdown-menu dropdown-block" role="menu">
                                   <li><a href="#">Profile edition</a></li>
                                   <li><a href="#">Admin</a></li>
                                   <li><a href="#">Logout</a></li>
                               </ul>
                           </li>
                       </ul>
        <div className="navbar-nav">

        </div>
      </div>
    </nav>
        </header>
    </div>
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <aside id="sidebar">
                <ul id="sidemenu" className="sidebar-nav">
                    <li>
                        <a>
                          <span className="sidebar-icon"><i className="fa fa-dashboard"></i></span>
                          <NavLink to="/" className='sidebar-title nav-item nav-link active'>Home</NavLink>
                        </a>
                    </li>
                    <li>
                        <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
                            <span className="sidebar-icon"><i className="fa fa-users"></i></span>
                            <span className="sidebar-title">Directory</span>
                            <b className="caret"></b>
                        </a>
                        <ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
                           <li><a> <NavLink to="/departments" className='sidebar-title fa fa-caret-right nav-item nav-link active'>Departments</NavLink></a></li>
                           <li><a> <NavLink to="/employees"  className='sidebar-title fa fa-caret-right nav-item nav-link active'>Employees</NavLink></a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
                            <span className="sidebar-icon"><i className="fa fa-newspaper-o"></i></span>
                            <span className="sidebar-title">Blog</span>
                            <b className="caret"></b>
                        </a>
                        <ul id="submenu-3" className="panel-collapse collapse panel-switch" role="menu">
                            <li><a href="#"><i className="fa fa-caret-right"></i>Posts</a></li>
                            <li><a href="#"><i className="fa fa-caret-right"></i>Comments</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-icon"><i className="fa fa-database"></i></span>
                            <span className="sidebar-title">PTO</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-icon"><i className="fa fa-terminal"></i></span>
                            <span className="sidebar-title">Handbook</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
        <main id="page-content-wrapper" role="main">
        <Switch>
        <Route exact path="/" component={DepartmentContainer,EmployeeContainer} />
         <Route exact path="/departments" component={DepartmentContainer} />
          <Route exact path="/employees" component={EmployeeContainer} />
        </Switch>
        </main>
    </div>
</div>
    );
  }
}
