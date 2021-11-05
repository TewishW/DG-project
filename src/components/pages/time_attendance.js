import React from 'react';
import './time_attendance.css';

function time_attendance() {
    return(
        <div className='container'>
            <div className='row justify-content-center pt-1'>
                <div className="row justify-content-center">
                    <div className="col-md-3 d-grid mb-1 p-1">
                        <label for="startDate" className="form-label">Start Date</label>
                        <input className="form-control-sm " id="startDate" rows="3" type="date"/>
                    </div>
                    <div className="col-md-3 d-grid mb-1 p-1">
                        <label for="endDate" className="form-label">End Date</label>
                        <input className="form-control-sm" id="endDate" rows="3" type="date"/>
                    </div>
                    <div className="col-md-3 d-grid mb-1 p-1">
                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </div>
                </div>
                <div className="table-responsive">
                    {/*---Data table---*/}
                    <table className="table table-light table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time in</th>
                                <th scope="col">Time out</th>
                                <th scope="col">Early out</th>
                                <th scope="col">Working Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Summary</h5>
                    <table className="table table-light table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Date</th>
                                <th>Time in</th>
                                <th>Time out</th>
                                <th>Early out</th>
                                <th>Working Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default time_attendance;




