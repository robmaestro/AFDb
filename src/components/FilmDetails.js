import Header from './Header'
import Footer from './Footer'

function FilmDetails() {

    return (
        <>
            <div className="main-body">
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                        </div>
                        <div class="col">
                            <span className="film-title">Film Title</span> <span className="film-year">Year</span> Directed by <span className="film-director">Directors Name</span>
                            <p>Plot</p>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-cast-tab" data-bs-toggle="tab" data-bs-target="#nav-cast" type="button" role="tab" aria-controls="nav-cast" aria-selected="true">CAST</button>
                                    <button class="nav-link" id="nav-crew-tab" data-bs-toggle="tab" data-bs-target="#nav-crew" type="button" role="tab" aria-controls="nav-crew" aria-selected="false">CREW</button>
                                    <button class="nav-link" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-details" aria-selected="false">DETAILS</button>
                                    <button class="nav-link" id="nav-genre-tab" data-bs-toggle="tab" data-bs-target="#nav-genre" type="button" role="tab" aria-controls="nav-genre" aria-selected="false">GENRES</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-cast" role="tabpanel" aria-labelledby="nav-cast-tab">CAST</div>
                                <div class="tab-pane fade" id="nav-crew" role="tabpanel" aria-labelledby="nav-crew-tab">DIRECTOR</div>
                                <div class="tab-pane fade" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">LANGUAGE</div>
                                <div class="tab-pane fade" id="nav-genre" role="tabpanel" aria-labelledby="nav-genre-tab">GENRES</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default FilmDetails;