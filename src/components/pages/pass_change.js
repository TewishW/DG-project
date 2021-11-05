import React from 'react';
import './pass_change.css';


function pass_forgot() {
    return(
        <div className='container-fluid'>
            <div className="col-lg-4 justify-content-center align-items-center pt-5 mx-auto">
                <div className="card">
                    <div className="card-header bg-secondary text-center text-light dark">
                       <h5>Forgot Password</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="col-md pt-4">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">Enter your email address and we'll send you a link to reset your password. Check your email.</div>
                            </div>
                            <div className="d-grid pt-4 pt-5">
                                <button class="btn btn-primary button--colour" type="submit">Submit</button>
                                <a className="text-center text-decoration-none" href='#'>
                                    <text className="fs-6">
                                        Back
                                    </text>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}






