import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	component: {
		height: "70vh",
		width: "70vh",
		maxWidth: "unset !important",
	},
	image: {
		backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
		background: "#c24008",
		backgroundPosition: "center 85%",
		backgroundRepeat: "no-repeat",
		height: "70vh",
		width: "40%",
		padding: "45px 35px",
		"& > *": {
			color: "#FFFFFF",
			fontWeight: 600,
		},
	},
	login: {
		padding: "25px 35px",
		display: "flex",
		flex: 1,
		flexDirection: "column",
		"& > *": {
			marginTop: 20,
		},
	},
	loginbtn: {
		textTransform: "none",
		background: "#2874f0",
		color: "#fff",
		height: 48,
		borderRadius: 2,
		"&:hover": {
			color: "#2874f0",
			border: "1px solid #2874f0",
			background: "#FFF",
		},
	},
	requestbtn: {
		textTransform: "none",
		background: "#fff",
		color: "#2874f0",
		height: 48,
		borderRadius: 2,
		boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
	},
	text: {
		color: "#878787",
		fontSize: 12,
	},
	createText: {
		margin: "auto 0 5px 0",
		textAlign: "center",
		color: "#2874f0",
		fontWeight: 600,
		fontSize: 14,
		cursor: "pointer",
	},
	error: {
		fontSize: 10,
		color: "#ff6161",
		lineHeight: 0,
		marginTop: 10,
		fontWeight: 600,
	},
}));
