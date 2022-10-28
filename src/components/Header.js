import React from "react";
import icon from "./icon.png";

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <a className="navbar-brand " href="#">
                            <img src={icon} className="PageLogo" alt="" width="60" height="40" />
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
                                    <a className="nav-link display-6" href="#">FILMS</a>
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
