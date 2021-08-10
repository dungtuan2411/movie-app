import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignInAction } from "../../store/actions/AuthAction";
import { Formik, Form, Field, useFormikContext } from "formik";
import { Prompt } from "react-router-dom";

const PromptIfDirty = () => {
    const formik = useFormikContext();
    return (
        <Prompt
            when={formik.dirty && formik.submitCount === 0}
            message="Bạn có muốn rời khỏi trang? Thay đổi của bạn sẽ bị mất"
        />
    );
};

function SignIn() {
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector((state) => state.auth.error);

    const validateUser = (value) => {
        let error;
        if (value.trim() === "") {
            error = "Vui lòng nhập tài khoản";
        }
        return error;
    };

    const validatePassword = (value) => {
        let error;
        if (!value) {
            error = "Vui lòng nhập mật khẩu";
        }
        return error;
    };

    const handleSubmit = (value) => {
        dispatch(SignInAction(value, history));
    };

    return (
        <div className="container w-50 mx-auto">
            <h1 className="text-center">Đăng nhập</h1>
            <Formik
                initialValues={{ taiKhoan: "", matKhau: "" }}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <PromptIfDirty />
                        <div className="form-group">
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="taiKhoan"
                                id="taiKhoan"
                                validate={validateUser}
                            />
                            {errors.taiKhoan && touched.taiKhoan && (
                                <span className="text-danger">
                                    {errors.taiKhoan}
                                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <Field
                                type="password"
                                className="form-control"
                                name="matKhau"
                                id="matKhau"
                                validate={validatePassword}
                            />
                            {errors.matKhau && touched.matKhau && (
                                <span className="text-danger">
                                    {errors.matKhau}
                                </span>
                            )}
                        </div>
                        <p style={{ color: "red" }}>{error}</p>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignIn;
