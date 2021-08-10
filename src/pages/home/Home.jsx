import { Container } from "@material-ui/core";
import React from "react";
import Carousel from "../../components/carousel/Carousel";
import HomeShowTime from "../../components/home_showtime/HomeShowTime";
import MovieSlider from "../../components/slider/MovieSlider";

function Home() {
    return (
        <>
            <div className="container-flud">
                <Carousel />
            </div>
            <Container maxWidth='md'>
                <MovieSlider />
            </Container>
            <Container maxWidth='md'>
                <HomeShowTime />
            </Container>
        </>
    );
}

export default Home;
