import React from "react"
import Header from './Header'
import Footer from './Footer'
import FilmList from "./FilmList";
import DupliHeader from "./DupliHeader";

export default function Films() {


    return (
        <>
            <div className="main-body">
                <DupliHeader />
                <div className="films-all">
                    <div className="collection-title">
                        <span>FILMS</span>
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
