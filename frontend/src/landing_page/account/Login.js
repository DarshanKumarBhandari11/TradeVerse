import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputValue);
            handleSuccess("Login successful!");
        } catch (error) {
            handleError("Invalid credentials!");
        }
        setInputValue({ email: "", password: "" });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: "70vh"}}>
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-3">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            className="form-control"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            className="form-control"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                    <div className="text-center mt-3">
                        <span>
                            Don't have an account? <Link to="/signup">Signup</Link>
                        </span>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;