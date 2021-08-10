import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <h1>404 Not Found</h1>
            <NavLink to="/">Quay về trang chủ</NavLink>
        </>
    );
}

export default PageNotFound;
