import React from 'react';
import './employee_info.css';

function employee_info(){
    return(
        <div className='container'>
            <div className='row justify-content-center p-0'>
                <div className="col-10 bg-white d-md-flex justify-content-md-between">
                    <h3>Employee Information</h3>
                </div>
            </div>
            <div className='row justify-content-center pt-5'>
                    <div className="col-10 col-lg-4 bg-white text-center">
                        <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="avatar" className="img_size mt-5"/>
                        <div className="d-grid pt-1 px-3 m-1">
                            <button class="btn btn-primary rounded-0" type="button">Check Attendance Time</button>
                        </div>
                        <div className="d-grid pt-1 px-3 m-1">
                            <button class="btn btn-primary rounded-0" type="button">Check Leave</button>
                        </div>
                        <div className="d-grid pt-1 px-3 m-1 mb-5">
                            <button class="btn btn-primary rounded-0" type="button">Change Passwork</button>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 bg-white">
                        <div class="mb-1 row pt-lg-3">
                            <label for="info1" class="col-sm-3 col-form-label fs-6 py-md-0">No.</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info1" value="0000001"/>
                            </div>
                            <label for="info2" class="col-sm-3 col-form-label fs-6 py-md-0">Full Name (TH)</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info2" value="Jane Doe"/>
                            </div>
                            <label for="info3" class="col-sm-3 col-form-label">Nickname (TH)</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info3" value="Jane"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Full Name (EN)</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info1" class="col-sm-3 col-form-label fs-6 py-md-0">Gender</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info1" value="0000001"/>
                            </div>
                            <label for="info2" class="col-sm-3 col-form-label fs-6 py-md-0">Address</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info2" value="Jane Doe"/>
                            </div>
                            <label for="info3" class="col-sm-3 col-form-label">Private Phone Number</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info3" value="Jane"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Company Email</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info1" class="col-sm-3 col-form-label fs-6 py-md-0">Birth Date</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info1" value="0000001"/>
                            </div>
                            <label for="info2" class="col-sm-3 col-form-label fs-6 py-md-0">Working Age</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info2" value="Jane Doe"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 bg-white pt-lg-3">
                        <div class="mb-1 row">
                            <label for="info3" class="col-sm-3 col-form-label">Department</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info3" value="Jane"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Department Name</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info1" class="col-sm-3 col-form-label fs-6 py-md-0">Section.</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info1" value="0000001"/>
                            </div>
                            <label for="info2" class="col-sm-3 col-form-label fs-6 py-md-0">Section Name</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control form-control-sm" id="info2" value="Jane Doe"/>
                            </div>
                            <label for="info3" class="col-sm-3 col-form-label">Position</label>
                            <div class="col-sm-8 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info3" value="Jane"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Position Name</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Job Level</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Site</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Site Name</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Employment Date</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                            <label for="info4" class="col-sm-3 col-form-label">Status</label>
                            <div class="col-sm-8 mt-1 p-2 p-md-1">
                                <input type="text" readonly class="form-control fs-6 form-control-sm" id="info4" value="Men"/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default employee_info;