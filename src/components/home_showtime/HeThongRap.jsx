import React from "react";
import "./scss/hethongrap.scss";

function HeThongRap({ movieTheaters, handleClickHeThongRap }) {
    const renderMovieTheaters = () => {
        if (movieTheaters && movieTheaters.length > 0) {
            return movieTheaters.map((theater, index) => {
                return (
                    <li key={index} onClick={() => handleClickHeThongRap(theater)}>
                        <img
                            className="logo"
                            src={theater.logo}
                            alt={theater.logo}
                        />
                    </li>
                );
            });
        }
    };
    return (
        <div>
            <ul id="parentListCenema">{renderMovieTheaters()}</ul>
        </div>
    );
}

export default React.memo(HeThongRap);
