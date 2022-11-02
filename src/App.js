import GlobalStyle from "./GlobalStyle";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";
import OnBoarding from "@components/templates/OnBoarding";
import Footer from "@components/templates/Footer";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<TopBanner />
			<Events />
			<ItemsOnSale />
			<OpenseaTopCollections />
			<OnBoarding />
			<Footer />
		</>
	);
}

export default App;
