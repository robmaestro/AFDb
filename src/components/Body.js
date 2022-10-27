import React from "react";

export default function Body() {
    return (
        <>
            <div className="main-body">
                <div className="banner-header">
                    <span className="banner-header-title">What are you watching today?</span>
                    <div id="banner-images" className="carousel slide" data-bs-ride="true">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://api.time.com/wp-content/uploads/2014/11/interstellar.jpg?quality=85&w=3600" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h1>INTERSTELLAR</h1>
                                    <p>2014 Dir. by: Christopher Nolan</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://m.media-amazon.com/images/M/MV5BMTMwNzExNDk1Ml5BMl5BanBnXkFtZTcwNTYyMTE0NQ@@._V1_.jpg" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h1>LA HAINE</h1>
                                    <p>1995 Dir. by: Mathieu Kassovitz</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://snworksceo.imgix.net/rce/eb5fe1d1-74e9-4076-969e-59212727451a.sized-1000x1000.webp?w=1000" className="d-block image-banner" alt="..." />
                                <div class="carousel-caption">
                                    <h3>THE BATMAN</h3>
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

                <div className="featured-movies">
                    <div>
                        <span>FEATURED MOVIES</span>
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
                    <div>
                        <span>UPCOMING MOVIES</span>
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
                    <div>
                        <span>BROWSE MOVIES</span>
                    </div>
                    <div className="browse-movies-content">
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" />
                    </div>
                    <div className="browse-movies-content">
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                        <img alt="movie poster" className="browse-movies-content-images" src="https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" />
                    </div>
                </div>

                <div className="account-prompt">
                    <div>
                        <span>DON'T HAVE AN ACCOUNT? SIGN UP! IT'S FREE</span>
                    </div>
                    <div className="browse-movies-content">

                    </div>
                </div>
            </div>
        </>
    )

}
