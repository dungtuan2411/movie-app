import React from "react";
import { Redirect } from "react-router-dom";

function GuardLogin(props) {
    let user = {};
    if (localStorage.getItem("userItem")) {
        user = JSON.parse(localStorage.getItem("userItem"));
    }
    // Nếu đã đăng nhập => đưa đến trang, ngược lại quay về sign in
    if (user.accessToken) {
        return props.children;
    } else {
        return <Redirect to="/sign-in"></Redirect>;
    }
}

export default GuardLogin;
