import React , { useState } from 'react';
import toast from 'react-hot-toast';
import './pass_forgot.css';



function Pass_forgot() {
    const [checkForm, setCheckForm] = useState("");
    const FormHandle = async(e)=> {
        e.preventDefault();
        if (checkForm !== "xxxx"){
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
                            <h5>Forgot Password</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={FormHandle}>
                                <div className="col-md pt-4">
                                    <label for="employee_id_reset" class="form-label rounded-0">EmployeeID</label>
                                    <input type="text" value={checkForm} onChange={(e) => {
                                        setCheckForm(e.target.value);
                                    }}  className="form-control" id="employee_id_reset" aria-describedby="ForgotHelp"/>
                                    <div id="ForgotHelp" class="form-text">Enter your EmployeeID and we'll automatically reset your password. Please contact your HR for new password.</div>
                                </div>
                                <div className="d-grid pt-4 pt-5">

                                    <button type="submit" class="close btn btn-primary button--colour rounded-0" data-dismiss="alert" aria-label="Close">
                                        Submit
                                    </button>
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

export default Pass_forgot;



