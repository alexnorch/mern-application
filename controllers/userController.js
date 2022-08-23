import AppError from "../utils/AppError.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const filterObj = (obj, ...allowedFilds) => {
  const newObj = {}

  Object.keys(obj).forEach(el => {
    if (allowedFilds.includes(el)) newObj[el] = obj[el]
  })
  return newObj
}

export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new AppError("Please provide all values", 400));
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    return next(new AppError("User already exist, please login in", 400));
  }

  const user = new User({ name, email, password });
  const createdUser = await user.save();

  res.status(200).json({ createdUser });
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide all values", 400));
  }

  const user = await User.findOne({ email }).select("+password +role");

  if (!user) {
    return next(new AppError("User with such data no exists", 400));
  }

  const isPasswordCorrect = await user.comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    return next(
      new AppError("Invalid email or password. Please try again", 400)
    );
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, "secretKey", {
    expiresIn: "1d",
  });

  res.status(200).json({ user, token });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ id });

  if (!user) {
    return next(new AppError("There is no user with this ID"), 400);
  }

  res.status(200).json({ user });
};

export const updateUser = async (req, res, next) => {

  // We need to add a refresh token when user is updated

  const { userId } = req.user;
  const filteredBody = filterObj(req.body, 'email', 'name')

  if (req.file) filteredBody.photo = req.file.filename

  const updatedUser = await User.findByIdAndUpdate(userId, filteredBody, { 
    new: true, 
    runValidators: true 
  });

  console.log(updatedUser)

  res.status(200).json({ updatedUser });
};

export const deleteUser = async (req, res) => {
  res.status(200).json({ message: "delete user" });
};

export const addCategory = async (req, res, next) => {
    const { id: _id } = req.params
    const user = await User.findOne({ _id })

    const alreadyExists = user.categories.find(item => item.name == req.body.name)

    if (alreadyExists) {
        return next(new AppError("Category is already exist", 400));
    }
    
    user.categories.push(req.body)
    await user.save()

    res.status(200).json({ user })
}
