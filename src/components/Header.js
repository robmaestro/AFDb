import React from "react";

export default function Header() {
    return (
        <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
	  <div class="container-fluid">	    
		<div class="collapse navbar-collapse " id="navbarSupportedContent">
		  <div class="mx-auto">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<a class="navbar-brand " href="#">AFDB</a>
                <li className="nav-item">
                  <a className="nav-link" href="#">SIGN IN</a>
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
