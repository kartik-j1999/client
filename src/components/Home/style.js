import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	navBarPaper: {
		padding: "0 100px",
	},
	navBarComponent: {
		display: "flex",
		margin: "56px 130px 0 130px",
		// marginTop: "56px",
		padding: "0 10px",
		justifyContent: "space-between",
	},
	container: {
		textAlign: "center",
		marginTop: 20,
	},
	image: {
		width: 64,
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			transform: "scale(1.3)",
		},
	},
	text: {
		fontsize: 14,
		fontWeight: 600,
	},
	carouselImage: {
		height: 280,
		width: "105%",
	},
	bannerComponent: {
		padding: 10,
		background: "#f2f2f2",
	},
	productImage: {
		height: 150,
		"&:hover": {
			transform: "scale(1.1)",
		},
	},
	slideComponent: {
		marginTop: 12,
		background: "#FFFFFF",
	},
	deal: {
		padding: "15px 20px",
		display: "flex",
	},
	dealText: {
		fontSize: 22,
		fontWeight: 600,
		lineHeight: "32px",
		marginRight: 25,
	},
	timer: {
		color: "7f7f7f",
		marginLeft: 10,
		display: "flex",
		alignItems: "center",
	},
	button: {
		marginLeft: "auto",
		backgroundColor: "#c24008",
		borderRadius: 2,
		color: "#fff",
		fontSize: 13,
		"&:hover": {
			background: "#fff",
			color: "#c24008",
			boxShadow: "none",
			border: "0 solid #c24008",
		},
	},
	text: {
		fontSize: 14,
		marginTop: 5,
	},
	wrapper: {
		padding: "25px 15px",
	},
	rightWrapper: {
		background: "#fff",
		padding: 5,
		margin: "12px 0 0 10px",
	},
	midSectionWrapper: {
		display: "flex",
		marginTop: "20px",
		justifyContent: "space-between",
	},
}));
