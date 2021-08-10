import axios from "axios";
import { ADD_USER, GET_ERRORS } from "../constants/AuthConst";

// Đăng ký
export const SignUpAction = (user, history) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "POST",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                data: user,
            });
            if (res.status === 200) {
                history.push("/sign-in");
            }
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: error.response.data,
                });
            }
        }
    };
};

// Đăng nhập
export const SignInAction = (user, history) => {
    // Gọi api lên server kiểm tra. Nếu thành công lưu vào local storage
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "POST",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data: user,
            });
            if (res.status === 200) {
                // Lưu vào local store
                localStorage.setItem("userItem", JSON.stringify(res.data));
                // Quay lại trang trước
                history.goBack();
            }
            dispatch({
                type: ADD_USER,
                payload: res.data,
            });
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: error.response.data,
                });
            }
        }
    };
};
