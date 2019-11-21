import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import validateInput from './validations';
import {userLoginRequest} from '../../redux/action/users/login';



function LoginForm() {
    const formDefaultValue = {
        email: "",
        password: ""

    }
    const [formValue, setFormValue] = useState(formDefaultValue);
    const {email, password} = formValue;


    function handleChange(e) {
        const target = e.target
        setFormValue (prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const { errors } = validateInput(this.state);
    if (errors.email || errors.password) {
        this.setState(() => ({
            errors
        }));
        Swal('Oops!', 'Something went wrong!', 'error');
    } else {
        userLoginRequest({
            email,
            password
        });
        this.setState(() => ({
            errors: {},
        }));
    }
    return (
        <div className="form-section">
            <h1 className="App"></h1>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4  mt-5 border bg-light">
                        <h2 className="mt-5 ml-3 text-secondary">Login</h2>
                        <p className="ml-3 text-secondary">Sign In to your account</p>
                        <form onSubmit={formDefaultValue} className="form-group">
                            <div className="col-auto">
                                <div className="input-group mb-2">
                                    {errors.email
                                    && (
                                        <p className="red-text">
                                            { errors.email }
                                        </p>
                                    )}
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Username"
                                           value={email}
                                           name={"email"}
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-auto mt-3">
                                <div className="input-group mb-2">
                                    {errors.password
                                    && (
                                        <p className="red-text">
                                            { errors.password }
                                        </p>
                                    )}
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-lock"></i></div>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           Value={password}
                                           name={"password"}
                                           placeholder="Password"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 mt-3">
                                <button type="submit" className="ml-3 btn-primary btn border-0">Login</button>
                                <a href="#" className="text-right">Forgot password?</a>
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

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'login'
})(LoginForm)
