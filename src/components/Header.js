import React from "react";
import icon from "./icon.png";
import { useNavigate } from "react-router-dom";
import CreateAccountModal from './CreateAccountModal';
import SignInModal from './SignInModal';

export default function Header() {

    let navigate = useNavigate()

    const toHome = () => {
        let path = '/';
        navigate(path);
    }
    const toFilms = () => {
        let path = '/films';
        navigate(path);
    }
    return (
        <>
         <SignInModal />
      <CreateAccountModal />
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <a className="navbar-brand " href="#">
                            <img src={icon} className="PageLogo" alt="" width="60" height="40" onClick={toHome} />
                        </a>
                        <div className="mx-auto">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <a className="nav-link display-6" data-bs-toggle="modal" data-bs-target="#exampleModal">SIGN IN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">CREATE ACCOUNT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" onClick={toFilms}>FILMS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link display-6" href="#">LISTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
