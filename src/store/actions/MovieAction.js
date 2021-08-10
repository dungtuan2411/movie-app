import axios from "axios";
import {
    GET_MOVIE_LIST,
    GET_MOVIE_DETAIL,
} from "../constants/MovieConst";
import { startLoadingAction, stopLoadingAction } from "./CommonAction";
// Lấy danh sách phim
export const getMovieListAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "GET",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            });
            dispatch({
                type: GET_MOVIE_LIST,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};
// Lấy thông tin phim
export const getMovieDetailAction = (maphim) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAction());
            const res = await axios({
                method: "GET",
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maphim}`,
            });
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: res.data,
            });
            dispatch(stopLoadingAction());
        } catch (err) {
            dispatch(stopLoadingAction());
            console.log(err);
        }
    };
};