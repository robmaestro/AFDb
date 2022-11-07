function SignInModal({ }) {
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
                                    <input type="text" className="form-control  caInput" id="validationCustom01" required />
                                </center>
                                <div className="invalid-feedback">
                                    Please provide a valid E-mail.
                                </div>
                            </div>
                            <div className="col-md-10" id="caHolder">

                                <label for="validationCustom03" className="form-label caLabel">Password</label>
                                <center>
                                    <input type="password" className="form-control  caInput" id="validationCustom02" required />
                                </center>
                                <div className="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                            </div>

                            <div className="col-10" id="caHolder">
                                <div className="form-check">
                                    <input className="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label " for="invalidCheck">
                                        Remember Me
                                    </label>
                                </div>

                            </div>

                            <button type="button" className="btn btn-dark" id="caHolder">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInModal;