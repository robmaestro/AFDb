import React from "react";
import FilmDetails from "./FilmDetails";
import { useNavigate } from "react-router-dom";

function FilmList() {

    let navigate = useNavigate()

    const toFilmDetails = (MovieID, Poster,Title,Year,Director,Plot,Cast,Language,Genre,Writer) => {

        let path = '/films/Details';
        navigate(path,{state:{movieid: MovieID,moviename: Poster, title:Title, year:Year, director: Director, plot: Plot, cast:Cast, language:Language, genre:Genre, writer:Writer}});
    }
    const [isLoading, setIsLoading] = React.useState(true);
    const [names, setNames] = React.useState([]);

    React.useEffect(() => {
        const url = "http://localhost:5000/";
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
            <div>
                {isLoading ? (<h1>Loading</h1>) : (
                    names.map((_names) => (<>
                        <img alt="movie poster" className="films-content-images" src={_names.Poster} onClick= { () => toFilmDetails(_names.Movie_ID,_names.Poster,_names.Title,_names.Year,_names.Director,_names.Plot,_names.Actors,_names.Language, _names.Genre,_names.Writer)} />
                    </>
                    ))
                )}
            </div>
        </>
    );
}

export default FilmList;