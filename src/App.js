import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./store/constants/AuthConst";
import { clientRouters } from "./configs/router.config";
import TemplateClient from "./templates/client/TemplateClient";
import GuardLogin from "./HOC/GuardLogin";

function App() {
    const dispatch = useDispatch();
    // Kiểm tra localStorage
    useEffect(() => {
        function getCredentialFromLocal() {
            const credentialInfo = localStorage.getItem("userItem");
            if (credentialInfo) {
                dispatch({
                    type: ADD_USER,
                    payload: JSON.parse(credentialInfo),
                });
            }
        }
        getCredentialFromLocal();
    }, [dispatch]);

    // Trang cho người dùng
    const renderRouterClientList = () => {
        return clientRouters.map((router, index) => {
            const { path, exact, Component, checkLogin } = router;
            // Kiểm tra đăng nhập
            if (checkLogin) {
                return (
                    <Route path={path} exact={exact} key={index}>
                        <GuardLogin>
                            <TemplateClient Component={Component} />
                        </GuardLogin>
                    </Route>
                );
            }
            return (
                // Template thường dùng, nội dung chính đưa vào main
                <Route
                    path={path}
                    exact={exact}
                    key={index}
                >
                    <TemplateClient Component={Component} />
                </Route>
            );
        });
    };

    return (
        <BrowserRouter>
            <Switch>
                {renderRouterClientList()}
                <Route exact path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
