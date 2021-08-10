import React from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "../../store/actions/AuthAction";
import { Prompt, useHistory } from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input form-control" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

// Kiểm tra người dùng có muốn rời khỏi trang không
const PromptIfDirty = () => {
    const formik = useFormikContext();
    return (
        <Prompt
            when={formik.dirty && formik.submitCount === 0}
            message="Bạn có chắc muốn rời khỏi trang?"
        />
    );
};

function SignUp() {
    // Sự kiện submit
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector((state) => state.auth.error);
    const handleSubmit = (values) => {
        //values là tham số mặc định của formik, giá trị formik trả về
        dispatch(SignUpAction(values, history));
    };

    return (
        <div className="container">
            <h1>Đăng ký</h1>
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    soDt: "",
                    maNhom: "GP01",
                    maLoaiNguoiDung: "KhachHang",
                    hoTen: "",
                }}
                validationSchema={yup.object({
                    // quy định object mà formik trả về có định dạng ra sao
                    taiKhoan: yup.string().required("*Field is required"),
                    matKhau: yup.string().required("*Field is required"),
                    email: yup
                        .string()
                        .required("*Field is required")
                        .email("*Email is valid"),
                    hoTen: yup.string().required("*Field is required"),
                    soDt: yup
                        .string()
                        .required("*Field is required")
                        .matches(/^\d+$/),
                    maNhom: yup.string().required("*Field is required"),
                })}
                onSubmit={handleSubmit}
            >
                <Form>
                    <PromptIfDirty />
                    <MyTextInput label="HoTen" name="hoTen" type="text" />
                    <MyTextInput label="TaiKhoan" name="taiKhoan" type="text" />
                    <MyTextInput
                        label="MatKhau"
                        name="matKhau"
                        type="password"
                    />
                    <MyTextInput label="Email" name="email" type="email" />
                    <MyTextInput label="SDT" name="soDt" type="text" />
                    <MySelect label="MaNhom" name="maNhom">
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                    </MySelect>
                    <span style={{ color: "red" }}>{error}</span>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default SignUp;
