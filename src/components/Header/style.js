import { makeStyles } from "@material-ui/core";
// import { alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
	header: {
		background: "#c24008",
		height: 55,
		// padding: 0,
	},
	logo: {
		paddingLeft: 50,
		height: 90,
		marginBottom: 8,
	},
	search: {
		borderRadius: theme.shape.borderRadius,
		backgroundColor: "#f7ede9",
		marginLeft: 0,
		marginBottom: 8,
		width: "35%",
		display: "flex",
	},
	searchIcon: {
		padding: theme.spacing(0.5, 0),
		height: "100%",
		pointerEvents: "fill",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#c24008",
	},
	searchButton: {
		padding: 0,
		margin: 0,
	},
	inputRoot: {
		color: "#c24008",
		fontSize: 16,
		width: "100%",
	},
	inputInput: {
		padding: theme.spacing(0, 0, 0, 3),
	},
	login: {
		textTransform: "none",
		borderRadius: 3,
		background: "#fff",
		color: "#c24008",
		fontSize: 16,
		fontWeight: 700,
		padding: theme.spacing(0.5, 4),
		boxShadow: "none",
		"&:hover": {
			background: "#c24008",
			color: "#fff",
			boxShadow: "none",
			border: "1px solid #fff",
		},
	},
	wrapper: {
		margin: "0 5% 0 auto",
		display: "flex",
		"& > *": {
			marginRight: 50,
			alignItems: "center",
			marginBottom: 8,
			textDecoration: "none",
			color: "#fff",
		},
	},
	container: {
		display: "flex",
	},
}));
