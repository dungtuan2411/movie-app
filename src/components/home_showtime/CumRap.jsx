import React from "react";
import "./scss/cumrap.scss";

function CumRap({ movieCumRap, handleClickCumRap }) {
    const renderCumRap = () => {
        if (movieCumRap && movieCumRap.length > 0) {
            return movieCumRap[0].lstCumRap.map((item, index) => {
                return (
                    <div key={index} className="itemCumRap" onClick={() => handleClickCumRap(item)}>
                        <img src="" alt="" className="imgCumRap" />
                        <div className="infoCumRap">
                            <h5>{item.tenCumRap}</h5>
                            <p>{item.diaChi}</p>
                        </div>
                    </div>
                );
            });
        }
    };

    return <div className="cumRap">{renderCumRap()}</div>;
}

export default CumRap;
