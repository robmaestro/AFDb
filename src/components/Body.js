import React from "react";

export default function Body() {
    return (
        <>
            <div className="main-body">
                <div className="banner-header">
                    <span className="banner-header-title">What are you watching today?</span>
                    <img className="image-banner" src="https://api.time.com/wp-content/uploads/2014/11/interstellar.jpg?quality=85&w=3600" alt="banner"/>
                </div>
                <div className="featured-movies">
                    <div>
                        <span>Featured Movies</span>
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
                        <span>Upcoming Movies</span>
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
                        <span>Browse Movies</span>
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
                        <span>Don't have an account? Sign-up it's FREE!</span>
                    </div>
                    <div className="browse-movies-content">
                    </div>
                </div>
            </div>
        </>
    )

}
