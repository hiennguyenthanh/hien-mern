import Post from "../models/post";

export const getPosts = async (req, res, next) => {
	try {
		const post = await Post.find();
		res.status(200).json({ post });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res, next) => {
	try {
		const newPost = new Post(req.body);
		await newPost.save();
		res.status(201).json({ newPost });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
