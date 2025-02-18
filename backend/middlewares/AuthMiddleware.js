const { UsersModel } = require("../Models/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ status: false, message: "No token provided." });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.status(403).json({ message: "Token expired or invalid." });
        } else {
            const user = await UsersModel.findById(data.id)
            if (user) return res.status(200).json({ status: true, user: user.username });
            else return res.status(404).json({ status: false, message: "User not found!" });
        }
    });
}