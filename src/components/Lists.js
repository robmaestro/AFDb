import React from "react";
import Header from './Header'
import Footer from './Footer'
import FilmList from "./FilmList";

export default function Lists() {


    const [isLoading, setIsLoading] = React.useState(true);
    const [names, setNames] = React.useState([]);

    React.useEffect(() => {
        const url = "http://localhost:5000/mywatchlist";
        fetch(url)
            .then((response) => response.json())
            .then((json) => setNames(json['results']))
            .catch((error) => console.log(error));
    }, []);

    React.useEffect(() => {
        if (names.length !== 0) {
            setIsLoading(false);
        }
        else {
            setIsLoading(true);
        }
    }, [names]);

    return (
        <>
            <div className="main-body">
                <Header />

                <div className="list-collection-container">
                    <div className="collection-title">
                        <span>Your List</span>

                    </div>
                    
                    <div class="row row-cols-1 row-cols-md-1 g-4">
                        <div class="col max-width">
                            <center>
                            {isLoading ? (<h1>Loading</h1>) : (
                                names.map((_names) => (<>
                                    <div className="card watchlist-card">
                                        <center>
                                        <img src={_names.Poster} className="watchlist-content-images" alt="..." />
                                        </center>
                                        <div class="card-body">
                                            <span className="watchlist-title-text">{_names.Title}</span>    <span className="watchlist-year-text">{_names.Year} </span>Directed by:<span className="watchlist-director-text"> {_names.Director}</span> 
                                            <p class="card-text">{_names.Plot}
                                            </p>
                                        </div>
                                    </div>
                                </>
                                ))
                            )}
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
