import React from 'react';
import './leave_sum.css';

class PullDataForTest extends React.Component{
    constructor() {
        super();
        this.state = {
            people : []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({people : users}));
    }
    render() {
        return(
            <div>
                {this.state.people.map(people => ((
                    <h1 key={people.id}> {people.name}</h1>
                )))}
            </div>
        );
    }   
}




function leave_sum(){
    return(
        <div className='container'>
            <div className='row justify-content-center p-0'>
                <div className="col-10 bg-white d-flex justify-content-between">
                    <h3>Leave Summary</h3>
                    <div>
                        <button className="btn btn-primary rounded-0" type="button">New Application</button>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center pt-4'>
                <div className="col-10 bg-light text-left">
                    <h4>History</h4>
                </div>
                <table className="table table-sm table-light table-bordered table-size-fixed">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">UName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PullDataForTest/>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
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
                                <button type="button" class="btn btn-outline-primary my-0 py-0" onclick="location.href='#'">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}
export default leave_sum