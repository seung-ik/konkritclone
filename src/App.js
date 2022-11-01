import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { textYellow, textSecondary } from "@styles/colors";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";

const ItemsOnSale = styled("div")`
	width: 100%;
	height: 398px;
	background-color: teal;
`;

const OpenseaTopCollections = styled("div")`
	width: 100%;
	height: 648px;
	background-color: ${textSecondary};
`;

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
			<ItemsOnSale>이벤트</ItemsOnSale>
			<OpenseaTopCollections>이벤트</OpenseaTopCollections>
			<OnBoarding>온보딩</OnBoarding>
			<Footer>푸터</Footer>
		</>
	);
}

export default App;
