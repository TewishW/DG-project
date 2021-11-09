import React , { useState } from 'react';
import toast from 'react-hot-toast';
import './pass_change.css';


function Pass_change() {
    const [checkPass, setCheckPass] = useState("");
    const [checkPassCon, setCheckPassCon] = useState("");

    const FormHandle = async(e)=> {
        e.preventDefault();
        if (checkPass !== checkPassCon){
            toast.error("Error")
            return;
        }
            toast.success('Successfully')
    }
    return(
        <div className='container-fluid position-absolute top-50 start-50 translate-middle'>
            <div className="row justify-content-center pt-1">
                <div className="col-md-5 col-lg-4 justify-content-center align-items-center mx-auto">
                    <div className="card rounded-0">
                        <div className="card-header bg-secondary text-center text-light dark rounded-0 bg-dark">
                        <h5>Change Password</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={FormHandle}>
                                <div className="col-md py-2">
                                    <label for="Pass_Change_New" class="form-label rounded-0">New Password</label>
                                    <input type="password" value={checkPass} onChange={(e) => {
                                        setCheckPass(e.target.value);
                                    }} class="form-control" id="Pass_Change_New" />
                                    <label for="Pass_Change_Con" class="form-label rounded-0">Confirm Password</label>
                                    <input type="password" value={checkPassCon} onChange={(e) => {
                                        setCheckPassCon(e.target.value);
                                    }} class="form-control" id="Pass_Change_Con"/>
                                </div>
                                <div className="d-grid pt-4">
                                    <button class="btn btn-primary button--colour rounded-0" type="submit">Submit</button>
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
        </div>
    );
}

export default Pass_change;





