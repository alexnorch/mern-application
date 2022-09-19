import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return next(new AppError("Access denied", 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(new AppError("Invalid or expiered token", 401));
    req.user = decoded;
  });

  next();
};

export default authenticate;
