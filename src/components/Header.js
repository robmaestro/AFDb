import React from "react";

export default function Header() {
    return (
        <>
    <nav className="navbar navbar-expand-sm">
	  <div className="container-fluid">	    
		<div className="collapse navbar-collapse " id="navbarSupportedContent">
		  <div className="mx-auto">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<a className="navbar-brand " href="#">
                <img src="./icon.png" alt="" width="30" height="24" />
            </a>
                <li className="nav-item">
                  <a className="nav-link">SIGN IN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CREATE ACCOUNT</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">FILMS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">LISTS</a>
                </li>
            </ul>
		</div>
		</div>
	  </div>
	</nav>
        </>
    )

}
