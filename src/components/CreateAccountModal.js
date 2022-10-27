function Modal({ }) {
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">JOIN AFDB</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body caBody">
                            <div class="col-md-10" id="caHolder">
                                <label for="validationCustom03" className="form-label caLabel">Email</label>
                                <center>
                                <input type="text" class="form-control  caInput" id="validationCustom01" required />
                                </center>
                                <div class="invalid-feedback">
                                    Please provide a valid E-mail.
                                </div>
                            </div>
                            <div class="col-md-10" id="caHolder">
                                <label for="validationCustomUsername" class="form-label caLabel">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control  caInput" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                    
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-10" id="caHolder">
                                
                                <label for="validationCustom03" class="form-label caLabel">Password</label>
                                <center>
                                <input type="password" class="form-control  caInput" id="validationCustom02" required />
                                </center>
                                <div class="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                            </div>

                            <div class="col-10"  id="caHolder">
                                <div class="form-check">
                                    <input class="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label " for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                                
                            </div>

                            <button type="button" class="btn btn-primary" id="caHolder">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;