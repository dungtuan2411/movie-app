import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./slider.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img
                src="https://tix.vn/app/assets/img/icons/next-session.png"
                alt="nextArrow"
            />
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img
                src="https://tix.vn/app/assets/img/icons/back-session.png"
                alt="prevArrow"
            />
        </div>
    );
}

function MovieSlider() {
    const movieList = useSelector((state) => state.movie.movieList);
    const history = useHistory();

    let settings = {
        dot: false,
        infinite: false,
        slidesToShow: 1,
        centerPadding: "60px",
        rows: 2,
        slidesPerRow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const renderMovieSlider = () => {
        if (movieList && movieList.length > 0) {
            return movieList.map((movie, index) => {
                return (
                    <div className="card-wrapper" key={index} id="lichChieu">
                        <div className="card">
                            <div className="card-image">
                                <img src={movie.hinhAnh} alt={movie.hinhAnh} />
                            </div>
                        </div>
                        <div className="card-title">
                            <h3>{movie.tenPhim}</h3>
                        </div>
                        <div
                            className="btn-ticket"
                            onClick={() => {
                                history.push(`/detail/${movie.maPhim}`);
                            }}
                        >
                            {/* Xóa navlink */}
                            <Button className="link">Đặt vé</Button>
                        </div>
                    </div>
                );
            });
        }
    };

    return <Slider {...settings}>{renderMovieSlider()}</Slider>;
}

export default MovieSlider;
