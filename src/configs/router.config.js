import Detail from "../pages/detail-movie/Detail";
import Home from "../pages/home/Home";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";

export const clientRouters = [
    {
        path: "/",
        exact: true,
        Component: Home,
    },
    {
        path: "/detail/:maphim",
        exact: true,
        Component: Detail,
    },
    {
        path: "/sign-in",
        exact: true,
        Component: SignIn,
    },
    {
        path: "/sign-up",
        exact: true,
        Component: SignUp,
    },
];
