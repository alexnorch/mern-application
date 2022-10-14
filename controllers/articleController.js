import Article from "../models/Article.js";
import Category from "../models/Category.js";

export const createArticle = async (req, res) => {
  const userId = req.user.userId;
  const userCategories = await Category.find({ user: userId })
  const articleCategory = userCategories.filter((item) => item.title === req.body.category)

  req.body.category = articleCategory[0]

  console.log(req.body)

  try {
    const article = await Article.create({...req.body, author: userId });

    res.status(200).json({ article });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateArticle = async (req, res) => {
  res.send("update article");
};

export const deleteArticle = async (req, res) => {
  res.send("delete article");
};

export const getAllArticles = async (req, res) => {
  const userId = req.user.userId;

  try {
    const articles = await Article.find({ author: userId })
    .populate({ path: "author", select: "name"})
    .populate('category')
    
    res.status(200).json({ articles });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getArticle = async (req, res) => {
  res.send("get article");
};
