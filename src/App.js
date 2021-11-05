import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Employee_Info from './components/pages/employee_info';
import Login from './components/pages/login';
import Time_Attendace from './components/pages/time_attendance';
import Pass_Forgot from './components/pages/pass_forgot';
import Leave_app from './components/pages/leave_app';
import Leave_sum from './components/pages/leave_sum';
import Approve_hr from './components/pages/approve_hr';


function App() {
  return (
  <div className='container'>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/employee_info' component={Employee_Info} />
          <Route path='/time_attendance' component={Time_Attendace} />
          <Route path='/leave_sum' component={Leave_sum} />
          <Route path='/leave_app' component={Leave_app} />
          <Route path='/pass_forgot' component={Pass_Forgot} />
          <Route path='/approve_hr' component={Approve_hr} />
        </Switch>
      </Router>
  </div>
    
  );
}

export default App;
