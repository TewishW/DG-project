import React from 'react';
import './approve_hr.css';




function approve_hr() {
    return(
        <div className='container'>
            <div className='row justify-content-center p-0'>
                <div className="col-10 bg-white d-flex justify-content-between">
                    <h3>Requested Leave</h3>
                </div>
            </div>
            <div className='row justify-content-center pt-4'>
                <div className="col-10 bg-light text-left">
                    <h4>History</h4>
                </div>
                <table className="table table-sm table-light table-bordered table-size-fixed">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time in</th>
                            <th scope="col">Time out</th>
                            <th scope="col">Early out</th>
                            <th scope="col">Working Hours</th>
                            <th scope="col">Approve</th>
                            <th scope="col">Reject</th>
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
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-success my-0 py-0" onclick="location.href='#'">Approve</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger my-0 py-0" onclick="location.href='#'">Reject</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}


export default approve_hr;
