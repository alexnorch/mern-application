import express from "express";
import userController from "../controllers/userController.js";
import restrictTo from "../middlewares/restrict.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.route("/register").post(userController.registerUser);

router.route("/login").post(userController.loginUser);

router
  .route("/")
  .get(
    authenticate,
    restrictTo("admin", "moderator", "user"),
    userController.getAllUsers
  );

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(
    authenticate,
    userController.uploadPhoto,
    userController.resizePhoto,
    userController.updateUser
  );

router
.route("/:id/confirm")
.post(
    authenticate, 
    userController.confirmEmail);

router
.route("/:token/verifyEmail")
.get(userController.verifyEmail);

router
.route("/:id/addCategory")
.patch(userController.addCategory);

export default router;
