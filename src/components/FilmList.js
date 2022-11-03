import React from "react";
import FilmDetails from "./FilmDetails";
import { useNavigate } from "react-router-dom";

function FilmList() {

    let navigate = useNavigate()
    const toFilmDetails = () => {
        let path = '/films/Details';
        navigate(path);
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
                        <img alt="movie poster" className="films-content-images" src={_names.Poster} onClick={toFilmDetails} />
                    </>
                    ))
                )}
            </div>
        </>
    );
}

export default FilmList;