import React, { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const TemplateContext = createContext(null);

function TemplateProvider({ children }) {
	const theme = createTheme({
		overrides: {
			MuiDialog: {
				paperWidthSm: {
					maxWidth: "unset",
				},
			},
			MuiDialogContent: {
				root: {
					padding: 0,
					"&:first-child": {
						paddingTop: 0,
					},
				},
			},
			MuiTableCell: {
				root: {
					borderBottom: 0,
				},
			},
		},
	});

	return (
		<TemplateContext.Provider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</TemplateContext.Provider>
	);
}

export default TemplateProvider;
