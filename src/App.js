import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import TemplateProvider from "./template/TemplateProvider";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<TemplateProvider>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</BrowserRouter>
		</TemplateProvider>
	);
}

export default App;
