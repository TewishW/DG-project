import React , {useState} from 'react';
import toast from 'react-hot-toast';
import './login.css';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const FormHandle = async(e)=> {
        e.preventDefault();
        if (username !== "xxxx"){
            toast.error("Error")
            return;
        }
            toast.success('Successfully')
    }

    return(
        <div className='container-fluid position-absolute top-50 start-50 translate-middle'>
            <div className="col-sm-6 col-md-5 col-lg-3 justify-content-center align-items-center mx-auto">
                <div className="card rounded-0">
                    <div className="card-header bg-dark text-center text-light rounded-0">
                       <h5>Login</h5>
                    </div>
                    <div className="card-body rounded-0">
                        <form onSubmit={FormHandle}>
                            <div className="col-md pt-1">
                                <label for="validationDefaultUsername" className="form-label rounded-0">Username</label>
                                <div className="input-group">
                                    
                                    <input type="text" value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}  class="form-control rounded-0" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" maxLength={10} required/>
                                </div>
                            </div>
                            <div className="col-md pt-2">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <a href='/pass_forgot'>
                                    <text className="float-end pt-1 fs-8">
                                        Forgot password?
                                    </text>
                                </a>
                                <input type="password" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}  className="form-control rounded-0" id="inputPassword" maxLength={25} required/>
                                <div className="form-check form-switch pt-1">
                                    <input className="form-check-input custom-control-input" type="checkbox"  role="switch" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label custom-control-label fs-8" for="flexCheckDefault">
                                        Keep me logged in
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid pt-4">
                                <button className="btn btn-primary button--colour rounded-0" type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;