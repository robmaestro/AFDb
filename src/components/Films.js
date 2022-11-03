import React from "react";
import Header from './Header'
import Footer from './Footer'
import FilmList from "./FilmList";

export default function Films() {


    return (
        <>
            <div className="main-body">

                <Header />
                <div className="upcoming-movies">
                    <div className="collection-title d-flex justify-content-between">
                        <span>FILMS</span>
                        <a href="#" id="more-link">MORE</a>
                    </div>
                    <div className="films-content">
                        <FilmList />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
