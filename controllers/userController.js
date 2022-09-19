import AppError from "../utils/AppError.js";
import multer from "multer";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import sharp from "sharp";
import nodemailer from "nodemailer";

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    return cb(new AppError("Only images are accepted"), false);
  }

  cb(null, true);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "957f0d4faebde6",
    pass: "08b461727415a5",
  },
});

const filterObj = (obj, ...allowedFilds) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFilds.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const registerUser = async (req, res, next) => {
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

const loginUser = async (req, res, next) => {
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

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({ user, token });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ id });

  if (!user) {
    return next(new AppError("There is no user with this ID"), 400);
  }

  res.status(200).json({ user });
};

// We need to add a refresh token when user is updated

const updateUser = async (req, res, next) => {
  const { userId } = req.user;
  const user = await User.findOne({ _id: userId });

  const filteredBody = filterObj(req.body, "email", "name", "location");

  if (req.file) filteredBody.photo = req.file.filename;
  if (user.isEmailConfirmed) delete filteredBody["email"];

  const updatedUser = await User.findByIdAndUpdate(userId, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updatedUser });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ message: "delete user" });
};

const addCategory = async (req, res, next) => {
  const { id: _id } = req.params;
  const user = await User.findOne({ _id });

  const alreadyExists = user.categories.find(
    (item) => item.name == req.body.name
  );

  if (alreadyExists) {
    return next(new AppError("Category is already exist", 400));
  }

  user.categories.push(req.body);
  await user.save();

  res.status(200).json({ user });
};

const uploadPhoto = upload.single("photo");

const resizePhoto = async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `${req.user.userId}_${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/${req.file.filename}`);

  next();
};

const confirmEmail = async (req, res, next) => {
  const { userId: _id } = req.user;

  const user = await User.findOne({ _id });
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  user.confirmString = token;

  const message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "eConspect | Confrirm your email",
    html: `<h1>Email confirmation</h1>
    <p>
    Please confirm your email adress by clicking following
    <a href="http://localhost:5000/api/user/${token}/verifyEmail">link</a>
    </p>
    `,
  };

  transport.sendMail(message, (err, info) => {
    if (err) return new AppError(err, 400);
    res.status(200).json({ message: "We sent you the verify code. Please paste it into the input" });
  });
};

const verifyEmail = async (req, res, next) => {
  const { token } = req.params;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return next(new AppError("Invalid or expired token", 400));

    const user = await User.findOne({ email: decoded.email });

    if (!user) return next(new AppError("There is no such user", 400));
    if (user.isEmailConfirmed)
      return next(new AppError("Email is already confirmed", 400));

    user.isEmailConfirmed = true;
    user.save();

    res.status(200).json({ message: "successfully confirmed!" });
  });
};

export default {
  registerUser,
  loginUser,
  addCategory,
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
  uploadPhoto,
  resizePhoto,
  confirmEmail,
  verifyEmail,
};
