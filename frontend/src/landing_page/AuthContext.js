import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        verifyToken();
    }, []);

    const verifyToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const res = await axios.get("http://localhost:3002/verify", {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data.valid) setUser(res.data.user);
            else logout();
        } catch (error) {
            logout();
        }
    };

    const login = async (credentials) => {
        const res = await axios.post("http://localhost:3002/login", credentials);
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setTimeout(() => {
            window.location.href = "http://localhost:3001/";
        }, 2000);
    };

    const signup = async (userData) => {
        const res = await axios.post("http://localhost:3002/signup", userData);
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setTimeout(() => {
            window.location.href = "http://localhost:3001/";
        }, 2000);
    };

    const logout = async () => {
        try {
            await axios.post("http://localhost:3002/logout", {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
        } catch (error) {
            console.error("Logout failed:", error);
        }
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};