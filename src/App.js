import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { textYellow } from "@styles/colors";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";

const OnBoarding = styled("div")`
	width: 100%;
	height: 415px;
	background-color: blue;
`;

const Footer = styled("div")`
	width: 100%;
	height: 240px;
	background-color: ${textYellow};
	margin-top: 100px;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<TopBanner />
			<Events />
			<ItemsOnSale />
			<OpenseaTopCollections />
			<OnBoarding>온보딩</OnBoarding>
			<Footer>푸터</Footer>
		</>
	);
}

export default App;
