import React from "react";

export default function Footer() {
    return (
        <>
            <nav className="navbar navbar-dark footer-container">
                <div className="container-fluid d-flex justify-content-around align-items-start gap-4">
                    <div className="d-flex flex-column gap-2">
                        <div>
                            <ul className="d-flex flex-direction-row m-0 p-0 gap-3 footer-link-list">
                                <li>
                                    <a className="footer-links" href="#">About</a>
                                </li>
                                <li>
                                    <a className="footer-links" href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a className="footer-links" href="#">Newsletter</a>
                                </li>
                                <li>
                                    <a className="footer-links" href="#">Help</a>
                                </li>
                                <li>
                                    <a className="footer-links" href="#">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-text">
                            <span>AFDB Limited. Est. 2022.</span>
                        </div>
                    </div>
                    <div className="d-flex gap-3">
                        <a className="footer-links" href="#">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a className="footer-links" href="#">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a className="footer-links" href="#">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a className="footer-links" href="#">
                            <i class="bi bi-youtube"></i>
                        </a>
                        <a className="footer-links" href="#">
                            <i class="bi bi-tiktok"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )

}
