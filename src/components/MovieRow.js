import React from "react";
import "./MovieRow.css";

const MovieRow = ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2 className="movie--title">{title}</h2>
            <div className="movie--box">
                <div className="movieRow--left">
                    <span class="material-icons">chevron_left</span>
                </div>
                <div className="movieRow--right">
                    <span class="material-icons">navigate_next</span>
                </div>
                <div className="movieRow--listarea">
                    <div className="movieRow--list">
                        {items.results.length > 0 &&
                            items.results.map((item, key) => (
                                <div className="movieRow--item">
                                    <img
                                        src={`http://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieRow;
