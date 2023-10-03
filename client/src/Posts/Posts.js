import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";

const Posts = () => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();
	const theme = useTheme();
	console.log(posts);

	return <div>Posts</div>;
};

export default Posts;
