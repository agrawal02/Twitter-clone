import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ALL_ROUTES } from "../util/route.util";
import { toast } from "react-toastify";
import { register } from "../api/authApi";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const username = e.target[2].value;
        const password = e.target[3].value;

        try {
            await register({ name, email, username, password });
            toast.success("Registration successful, please login to continue.");
            navigate(ALL_ROUTES.LOGIN_PAGE);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className="vh-100" style={{ backgroundColor: "lightgray" }}>
            <div className="container py-5 h-100 " >

                <div className="col-md-5 col-sm-12 " style={{
                    marginLeft: 300, backgroundColor: "white", borderRadius: "1rem",
                }}>

                    <div className="card-body p-4 p-lg-5 text-black shadow">
                        <img className="img-fluid"
                            style={{ width: 90, height: 90 }}
                            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
                        <form onSubmit={handleLogin}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                                <span className="h1 fw-bold mb-0">
                                    Register
                                </span>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="form-control form-control-lg"
                                    required
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control form-control-lg"
                                    required
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="form-control form-control-lg"
                                    required
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="pt-1 mb-4">
                                <button
                                    className="btn btn-dark btn-lg btn-block"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                            <p className="mb-5 pb-lg-2 text-muted">
                                Already Registered?{" "}
                                <Link
                                    to={ALL_ROUTES.LOGIN_PAGE}
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
