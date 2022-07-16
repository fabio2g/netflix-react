import React, { useState } from "react";
import "./MovieRow.css";

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };
    const hadleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 200;
        if (window.innerWidth - listWidth > x) {
            x = window.innerWidth - listWidth - 60;
        }
        setScrollX(x);
    };

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left">
                <span class="material-icons" onClick={handleLeftArrow}>
                    arrow_back_ios
                </span>
            </div>
            <div className="movieRow--right">
                <span class="material-icons" onClick={hadleRightArrow}>
                    arrow_forward_ios
                </span>
            </div>
            <div className="movieRow--listarea">
                <div
                    className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 200,
                    }}
                >
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
    );
};

export default MovieRow;
