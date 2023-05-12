import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/authApi";
import { ALL_ROUTES } from "../util/route.util";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;

        setLoading(true);

        try {
            const data = await login({ username, password });
            localStorage.setItem("token", data.jwtToken);
            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = data.jwtToken;

                return config;
            });

            // add delay
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                    navigate(ALL_ROUTES.HOME_PAGE);
                }, 1000)
            );
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    };

    return (

        <div>
            <div className="vh-100" style={{ backgroundColor: "lightgray" }}>
                <div className="container py-5 h-100 " >

                    <div className="col-md-5 col-sm-12 " style={{
                        marginLeft: 300, backgroundColor: "white", borderRadius: "1rem",
                    }}>
                        
                        <div className="card-body p-4 p-lg-5 text-black shadow" >
                            <img className="img-fluid"
                                style={{ width: 90, height: 90 }}
                                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
                            <form onSubmit={handleLogin}>

                                <div className="d-flex align-items-center mb-3 pb-1">

                                    <span className="h1 fw-bold mb-0">
                                        Log in
                                    </span>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="form-control form-control-lg"
                                        required
                                        name="username"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        required
                                        name="password"
                                    />
                                </div>
                                <div className="pt-1 mb-4">
                                    {!loading && (
                                        <button
                                            className="btn btn-dark btn-lg btn-block"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    )}

                                    {loading && (
                                        <button
                                            disabled
                                            className="btn btn-dark btn-lg btn-block"
                                        >
                                            Loading...
                                        </button>
                                    )}
                                </div>
                                <p className="mb-5 pb-lg-2 text-muted">
                                    Don't have an account?{" "}
                                    <Link
                                        to={
                                            ALL_ROUTES.REGISTER_PAGE
                                        }
                                    >
                                        Register here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
