import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	useTheme,
} from "@mui/material";
import memories from "./images/memories.png";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getPosts } from "./actions/posts";

import useStyles from "./styles";

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const theme = useTheme();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div>
			<Container maxwidth="lg">
				<AppBar
					className={classes.appBar}
					position="static"
					color="inherit"
				>
					<Typography
						className={classes.heading}
						variant="h2"
						align="center"
					>
						Memories
					</Typography>
					<img
						className={classes.image}
						src={memories}
						alt="memories"
						height="60"
					/>
				</AppBar>
				<Grow in>
					<Container>
						<Grid
							container
							justify="space-between"
							alignItems="stretch"
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Posts />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</div>
	);
};

export default App;
