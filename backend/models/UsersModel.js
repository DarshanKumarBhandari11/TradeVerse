const { model } = require("mongoose");
const { UsersSchema } = require("../schemas/UsersSchema");

const UsersModel = model("user", UsersSchema);

module.exports = { UsersModel };