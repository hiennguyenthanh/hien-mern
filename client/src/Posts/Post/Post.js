import React from "react";
import useStyles from "./styles";
import { useTheme } from "@mui/material";

const Post = () => {
	const theme = useTheme();
	const classes = useStyles();
	return <div>Post</div>;
};

export default Post;
