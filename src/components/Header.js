import React from "react";
import icon from "./icon2.png";
import { useNavigate } from "react-router-dom";
import CreateAccountModal from './CreateAccountModal';
import SignInModal from './SignInModal';
import { useState } from "react";

export default function Header() {
    const [createAccount,setCreateAccount] = useState("Create Account")
    const [signUp,setSignUp] = useState("Sign In")
    let navigate = useNavigate()

    const toHome = () => {
        let path = '/';
        navigate(path);
    }
    const toFilms = () => {
        let path = '/films';
        navigate(path);
    }

    const toLists = () => {
        let path = '/lists';
        navigate(path);
    }

  

    return (
        <>
            <SignInModal setCreateAccount={setCreateAccount} setSignUp={setSignUp} />
            <CreateAccountModal />


            <nav className="navbar navbar-expand-sm navbar-dark navbar-container">
                <div className="container-fluid">
                    <div className="d-flex navbar-head">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <a className="navbar-brand " href="#">
                            <img src={icon} className="PageLogo" alt="" onClick={toHome} />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="mx-auto">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links">

                                <li className="nav-item">
                                    <a className="nav-link display-6" data-bs-toggle="modal" data-bs-target="#exampleModal">{signUp}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{createAccount}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" onClick={toFilms}>FILMS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" onClick={toLists}>LISTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
