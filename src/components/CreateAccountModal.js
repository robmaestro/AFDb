function Modal({ }) {
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
                                    <input type="text" className="form-control  caInput" id="validationCustom01" required />
                                </center>
                                <div className="invalid-feedback">
                                    Please provide a valid E-mail.
                                </div>
                            </div>
                            <div className="col-md-10" id="caHolder">
                                <label for="validationCustomUsername" className="form-label caLabel">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control  caInput" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
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
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>

                            </div>

                            <button type="button" className="btn btn-primary" id="caHolder">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;