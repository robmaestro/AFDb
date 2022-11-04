function SignInModal({ }) {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">SIGN IN</h5>
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

                                <label for="validationCustom03" class="form-label caLabel">Password</label>
                                <center>
                                    <input type="password" class="form-control  caInput" id="validationCustom02" required />
                                </center>
                                <div class="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                            </div>

                            <div class="col-10" id="caHolder">
                                <div class="form-check">
                                    <input class="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label " for="invalidCheck">
                                        Remember Me
                                    </label>
                                </div>

                            </div>

                            <button type="button" class="btn btn-dark" id="caHolder">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInModal;