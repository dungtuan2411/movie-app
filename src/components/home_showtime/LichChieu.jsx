import React, { Fragment } from "react";
import "./scss/lichchieu.scss";

function LichChieu({ lichChieu }) {
    const renderLichChieu = () => {
        return lichChieu?.danhSachPhim.map((item, index) => {
            return (
                <Fragment key={index}>
                    <div className="itemMovie">
                        <img
                            src={item.hinhAnh}
                            alt={item.tenPhim}
                            className="imgMovie"
                        />
                        <div className="infoMovie">
                            <h5>{item.tenPhim}</h5>
                        </div>
                    </div>
                    <div className="timesMovie">
                        
                    </div>
                </Fragment>
            );
        });
    };
    return <div className="lichChieuPhim">{renderLichChieu()}</div>;
}

export default LichChieu;
