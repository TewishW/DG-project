import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Triple P</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href='/employee_info'>Employee Information</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/time_attendance">Time Attendance</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="leave_app">Leave Application</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Leave Summary</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;