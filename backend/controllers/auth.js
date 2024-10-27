import jwt from "jsonwebtoken";
import AdminsModel from "../models/admins.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  AdminsModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ _id: user[0] }, "jwtkey");
        const { passNamword, ...other } = user;
        res.cookie("access_token", token).status(200).json(other);
      } else {
        res.status(400).json("Wrong password!");
      }
    } else {
      res.status(404).json("User not found!");
    }
  });
};

  export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("USer Has been logged out");
};
