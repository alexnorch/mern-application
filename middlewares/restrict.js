import AppError from "../utils/AppError.js";

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!roles.includes(userRole)) {
      return next(new AppError("You are not an admin!", 401));
    }

    next();
  };
};

export default restrictTo;
