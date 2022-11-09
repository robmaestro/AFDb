import { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'

function Modal() {
    const validator = require('validator')

    const [emailReg,setEmailReg] = useState('');
    const [usernameReg,setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailStatus, setEmailStatus] = useState('');

    const register = () =>{
        if (emailReg === "" || usernameReg === "" || passwordReg === "") {
            setEmailStatus("Invalid Empty fields.")
        }
        else if (!validator.isEmail(emailReg)) {
            setEmailStatus("Invalid Email address.")
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Account created.'
            })
        Axios.post('http://localhost:5000/register', {
            email:emailReg, 
            username: usernameReg,
            password: passwordReg
        }).then((response) => { 
            console.log(response);
        })
    }
    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">JOIN AFDB</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body caBody">
                            <div className="col-md-10" id="caHolder">
                                <label for="validationCustom03" className="form-label caLabel">Email</label>
                                <center>
                                    <input type="text" className="form-control  caInput" onChange={(e) => {
                                        setEmailReg(e.target.value);
                                    }}/>
                                </center>
                            </div>
                            <div className="col-md-10" id="caHolder">
                                <label for="validationCustomUsername" className="form-label caLabel">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>

                                    <input type="text" className="form-control  caInput" onChange={(e) => {
                                        setUsernameReg(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-10" id="caHolder">

                                <label for="validationCustom03" className="form-label caLabel">Password</label>
                                <center>
                                    <input type="password" className="form-control  caInput" onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }}  />
                                </center>
                            </div>

                            <div className="col-10" id="caHolder">
                                <div className="form-check">
                                    <input className="form-check-input " type="checkbox"/>
                                    <label className="form-check-label " for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                </div>

                            </div>
                                    <center>
                                        <h6>{emailStatus}</h6>
                                    </center>
                            <button type="button" class="btn btn-dark" id="caHolder" onClick={register}>SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;