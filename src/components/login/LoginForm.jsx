import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { reduxForm } from 'redux-form'
import useFormValidation from "./useFormValidation";
import validation from "./validations";

const INITIAL_STATE = {
    email: "",
    password: ""
};

function LoginForm(props) {
    const { handleSubmit, handleChange, values,handleBlur, errors, isSubmitting} = useFormValidation(INITIAL_STATE, validation);

    if (isSubmitting && Object.entries(errors).length === 0 && errors.constructor === Object) {
        const { userLoginRequest } = props;
        userLoginRequest(values);
    }

    return (
        <div className="form-section">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4  mt-5 border bg-light">
                        <h2 className="mt-5 ml-3 text-secondary">Login</h2>
                        <p className="ml-3 text-secondary">Sign In to your account</p>
                        <form onSubmit={handleSubmit} className="form-group">
                            <div className="text-center">{errors.email && <p className="text-danger">{errors.email}</p>}</div>
                            <div className="col-auto">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                                    </div>

                                    <input type="text"
                                           className="form-control"
                                           placeholder="Username"
                                           value={values.email}
                                           name={"email"}
                                           onBlur={handleBlur}
                                           onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="text-center">{errors.password && <p className="text-danger">{errors.password}</p>}</div>
                            <div className="col-auto mt-3">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-lock"></i></div>
                                    </div>
                                    <input type="password"
                                           className="form-control"
                                           value={values.password}
                                           name={"password"}
                                           placeholder="Password"
                                           onBlur={handleBlur}
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 mt-3">
                                <button disabled={isSubmitting} type="submit" className="ml-3 btn-primary btn border-0">Login</button>
                                <a href="LoginForm.jsx" className="text-right">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 mt-5 bg-primary">
                        <h2 className="text-center text-white mt-5">Sign up</h2>
                        <p className="text-white text-center lorem-text">Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua.</p>
                        <button type="submit" className="btn btn-outline-light register-btn mt-4">Register Now!</button>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default reduxForm({
    form: 'login'
})(LoginForm)
