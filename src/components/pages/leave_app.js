import React from 'react';
import './leave_app.css';
{/*}
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
*/}

function leave_app(){
    return(
        <div className='container'>
            <div className='row justify-content-center p-0'>
                <div className="col-10 bg-white d-md-flex justify-content-md-between">
                    <h3>Leave Application</h3>
                    <div className="d-flex gap-md-2 justify-content-md-around">
                        <button className="btn btn-primary rounded-0 pt-1" type="button">Send Application</button>
                        <div className="vr invisible-md"/>
                        <button className="btn btn-hollow rounded-0 pt-1" type="button">Cancel Application</button>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center pt-4'>
                <div className="col-10 bg-light text-left">
                    <h4>History</h4>
                </div>
                {//<PullDataForTest/>
                }
            </div>
            
        </div>
    );
}
export default leave_app







