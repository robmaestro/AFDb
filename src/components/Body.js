import React from "react";
import Header from './Header'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Body() {

    let navigate = useNavigate()

    const toFilmPage = () => {
        let path = '/films/Details';
        navigate(path);
    }

    const toFilms = () => {
        let path = '/films';
        navigate(path);
    }
    return (
        <>
            <div className="main-body">
                <Header />
                <div className="banner-header">
                    <div className="webpage-text">
                        What are you watching today?
                    </div>

                    <div id="banner-images" className="carousel slide" data-bs-ride="true">

                        <div className="carousel-inner">
                            <div className="carousel-item active" onClick={toFilmPage}>
                                <img src="https://wallpapers.com/images/hd/interstellar-astronaut-cooper-on-ice-blxlb2krxcwjb2du.jpg" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h1>INTERSTELLAR</h1>
                                    <p>2014 Dir. by: Christopher Nolan</p>
                                </div>
                            </div>
                            <div className="carousel-item" onClick={toFilmPage}>
                                <img src="https://images2.alphacoders.com/806/thumb-1920-806087.jpg" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h1>LA HAINE</h1>
                                    <p>1995 Dir. by: Mathieu Kassovitz</p>
                                </div>
                            </div>
                            <div className="carousel-item" onClick={toFilmPage}>
                                <img src="https://images.wallpapersden.com/image/download/batman-2022_bWZuameUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h1>THE BATMAN</h1>
                                    <p>2022 Dir. by: Matt Reeves</p>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#banner-images" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#banner-images" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>

                <div className="content-body-container">


                    <div className="webpage-text">
                        See some movies with our list
                    </div>

                    <div className="featured-movies">
                        <div className="collection-title d-flex justify-content-between">
                            <span>FEATURED MOVIES</span>
                            <a href="#" id="more-link">MORE</a>
                        </div>
                        <div className="featured-movies-content">
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" />
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" />
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                            <img alt="movie poster" className="featured-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" />
                        </div>
                    </div>
                    <div className="upcoming-movies">
                        <div className="collection-title d-flex justify-content-between">
                            <span>UPCOMING MOVIES</span>
                            <a href="#" id="more-link">MORE</a>
                        </div>
                        <div className="upcoming-movies-content">
                            <img alt="movie poster" className="upcoming-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                            <img alt="movie poster" className="upcoming-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" />
                            <img alt="movie poster" className="upcoming-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" />
                            <img alt="movie poster" className="upcoming-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                            <img alt="movie poster" className="upcoming-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" />
                        </div>
                    </div>

                    <div className="browse-movies">
                        <div className="collection-title d-flex justify-content-between">
                            <span>BROWSE MOVIES</span>
                            <a onClick={toFilms} id="more-link">MORE</a>
                        </div>
                        <div className="browse-movies-content">
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNWMxYTZlOTUtZDExMi00YzZmLTkwYTMtZmM2MmRjZmQ3OGY4XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                            <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg" />
                        </div>
                    </div>

                    <div className="movie-genres-container">
                        <div className="webpage-text">
                            <span>Browse by genres</span>
                        </div>

                        <div className="movie-genres-list">

                            <div className="d-flex flex-row">
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Action
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Comedy
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Horror
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Sci-Fi
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Fantasy
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BZjYzNTMzZTAtNzMzOS00ZWRhLTg3MWMtM2NjYmJmZjU4NmFhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzI3NjY2ODc@._V1_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Romance
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Thriller
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Drama
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="movie-genre">
                                    <img alt="movie poster" className="movie-genre-images" src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                                    <a href="#">
                                        <div className="image-overlay">
                                            <div className="image-overlay-text">
                                                Adventure
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="account-prompt-container">
                        <span>Don't have an account? Sign up! It's FREE!</span>
                        <a href="#" className="account-prompt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Register Now
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
