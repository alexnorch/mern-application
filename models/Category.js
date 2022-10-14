import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title must be provided']
    },
    color: {
        type: String,
        required: [true, 'Color must be provided']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
    }
})

export default mongoose.model('Category', CategorySchema)