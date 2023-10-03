import React, { useState } from "react";
import useStyles from "./styles";
import { useTheme, TextField, Typography, Paper, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
const Form = () => {
	const classes = useStyles();
	const theme = useTheme();
	const dispatch = useDispatch();

	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedString: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
	};

	const handleOnChange = (e) =>
		setPostData((prev) => {
			const updatedField = {
				[e.target.name]: e.target.value,
			};
			return { ...prev, updatedField };
		});
	const handleOnClear = (e) =>
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedString: "",
		});

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6"> Creating a memories</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={handleOnChange}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={handleOnChange}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={handleOnChange}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={handleOnChange}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData((prev) => ({
								...prev,
								selectedFile: base64,
							}))
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="container"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={handleOnClear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
