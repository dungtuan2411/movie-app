import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListAction } from "../../store/actions/MovieAction";
import CarouselMovie from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

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

function Carousel() {
    const movieList = useSelector((state) => state.movie.movieList);
    const dispatch = useDispatch();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "carousel",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    useEffect(() => {
        dispatch(getMovieListAction());
    }, [dispatch]);

    const renderMovie = () => {
        const carouselMovie = movieList.slice(0, 3);
        return carouselMovie?.map((movie, index) => {
            return (
                <div key={index} className="cover">
                    <img src={movie.hinhAnh} alt={movie.hinhAnh} />
                </div>
            );
        });
    };

    return (
        <div>
            <CarouselMovie {...settings}>{renderMovie()}</CarouselMovie>
        </div>
    );
}

export default Carousel;
