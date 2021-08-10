import { Grid } from "@material-ui/core";
import React, { useState, useCallback, useEffect } from "react";
import HeThongRap from "./HeThongRap";
import CumRap from "./CumRap";
import LichChieu from "./LichChieu";
import axios from "axios";

function HomeShowTime() {
    const [movieTheaters, setMovieTheaters] = useState([]);
    const [maCumRap, setMaCumRap] = useState("");
    const [movieCumRap, setMovieCumRap] = useState([]);
    const [lichChieu, setLichChieu] = useState();
    // Lấy danh sách rạp
    const fetchData = useCallback(() => {
        async function fetchMovieTheaters() {
            try {
                const res = await axios({
                    method: "GET",
                    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
                });
                setMovieTheaters(res.data);
                setMaCumRap(res.data[0].maHeThongRap);
                // return res.data;
            } catch (err) {
                console.log(err);
            }
        }
        fetchMovieTheaters();
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    // Xử lý sự kiện khi click
    const handleClickHeThongRap = (data) => {
        setMaCumRap(data.maHeThongRap);
    };
    // Lấy cụm rạp dựa trên mã
    useEffect(() => {
        if (maCumRap) {
            const { maHeThongRap } = movieTheaters.find((item) => {
                return item.maHeThongRap === maCumRap;
            });
            async function layCumRapHeThongRap(maHeThongRap) {
                try {
                    const res = await axios({
                        method: "GET",
                        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
                    });
                    setMovieCumRap(res.data);
                    setLichChieu(res.data[0].lstCumRap[0]);
                } catch (err) {
                    console.log(err);
                }
            }
            layCumRapHeThongRap(maHeThongRap);
        }
    }, [maCumRap, movieTheaters]);
    // Chọn cụm rạp để lấy lịch chiếu
    const handleClickCumRap = (data) => {
        console.log(data);
        setLichChieu(data);
    };

    return (
        <div className="mt-2">
            <Grid container>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <HeThongRap
                        movieTheaters={movieTheaters}
                        handleClickHeThongRap={handleClickHeThongRap}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <CumRap
                        movieCumRap={movieCumRap}
                        handleClickCumRap={handleClickCumRap}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <LichChieu lichChieu={lichChieu} />
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeShowTime;
