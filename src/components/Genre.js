import React from "react";
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import { useState } from "react";


function Genre() {
    const { state } = useLocation();
    const [isLoading, setIsLoading] = React.useState(true);
    const [names, setNames] = React.useState([]);

    React.useEffect(() => {
        const url = `http://localhost:5000/genre/${state.genre}`;
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
        </div>
        <Footer />
        </>
        
    )


}

export default Genre;