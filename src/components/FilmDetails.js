
import Footer from './Footer'
import DupliHeader from './DupliHeader';
import { useLocation } from 'react-router-dom';
import Axios from "axios";
import Swal from 'sweetalert2'


function FilmDetails() {
    const { state } = useLocation();


    const addtowatchlist = () => {
        Axios.post('http://localhost:5000/watchlist', {
            movieid: state.movieid,
            poster: state.moviename,
            title: state.title,
            year: state.year,
            director: state.director,
            plot: state.plot,
        }).then((response) => {
            console.log(response);
        })
        Swal.fire({
            icon: 'success',
            title: 'Added to watchlist.'
        })
    }
    return (
        <>
            <div className="main-body">
                <DupliHeader />
                <div className="film-details-container">
                    <div className="row film-details-row">
                        <div className="col-md-6 film-detail-image-holder">
                            <img alt="movie poster" className="film-movies-content-images" src={state.moviename} />
                            <button type="button" className="btn btn-dark Add-to-watchlist-btn" onClick={addtowatchlist}>Add to Watchlist</button>
                        </div>
                        <div className="col-md-6">
                            <span className="film-title">{state.title}</span> <span className="film-year">{state.year}</span> Directed by <span className="film-director">{state.director}</span>
                            <p>{state.plot}</p>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-cast-tab" data-bs-toggle="tab" data-bs-target="#nav-cast" type="button" role="tab" aria-controls="nav-cast" aria-selected="true">CAST</button>
                                    <button className="nav-link" id="nav-crew-tab" data-bs-toggle="tab" data-bs-target="#nav-crew" type="button" role="tab" aria-controls="nav-crew" aria-selected="false">CREW</button>
                                    <button className="nav-link" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-details" aria-selected="false">DETAILS</button>
                                    <button className="nav-link" id="nav-genre-tab" data-bs-toggle="tab" data-bs-target="#nav-genre" type="button" role="tab" aria-controls="nav-genre" aria-selected="false">GENRES</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active tab-space" id="nav-cast" role="tabpanel" aria-labelledby="nav-cast-tab"><span>{state.cast}</span></div>
                                <div className="tab-pane fade tab-space" id="nav-crew" role="tabpanel" aria-labelledby="nav-crew-tab"><span>DIRECTOR......... {state.director}</span><br />
                                    <span>WRITER.............. {state.writer}</span></div>
                                <div className="tab-pane fade tab-space" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">LANGUAGE........ {state.language}</div>
                                <div className="tab-pane fade tab-space" id="nav-genre" role="tabpanel" aria-labelledby="nav-genre-tab">GENRES....... {state.genre}</div>
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