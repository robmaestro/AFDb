import { useState } from "react";
import Axios from "axios";


function SignInModal({ setCreateAccount, setSignUp}) {

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const [loginStatus,setLoginStatus] = useState("");
    const [closer,setCloser] = useState("notmodal");

    const Login = () => {
        if (loginEmail === "" || loginPassword === ""){
            setLoginStatus("Invalid Missing Fields.")
        }
        else{

        Axios.post('http://localhost:5000/login', {
            email:loginEmail, 
            password: loginPassword
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message)
                setLoginEmail("")
                setLoginPassword("")
            }
            else
            {
                setCreateAccount(response.data[0].Username);
                setSignUp("");
                setCloser("modal");
                setLoginEmail("")
                setLoginPassword("")
            }
        })
    }
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">SIGN IN</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body caBody">
                            <div className="col-md-10" id="caHolder">
                                <label for="validationCustom03" className="form-label caLabel">Email</label>
                                <center>
                                    <input type="text" value={loginEmail} className="form-control  caInput"  onChange={(e) => {
                                        setLoginEmail(e.target.value);
                                    }}/>
                                </center>
                            </div>
                            <div className="col-md-10" id="caHolder">

                                <label for="validationCustom03" className="form-label caLabel">Password</label>
                                <center>
                                    <input type="password" value={loginPassword}  className="form-control  caInput"  onChange={(e) => {
                                        setLoginPassword(e.target.value);
                                    }} />
                                    <h6 className="login-status">{loginStatus}</h6>
                                </center>
                            </div>

                            <button type="button" className="btn btn-dark" id="caHolder"  data-bs-dismiss={closer} onClick={Login}>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInModal;