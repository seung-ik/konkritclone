import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { textYellow, textSecondary } from "@styles/colors";
import Header from "@components/templates/Header";

const TopBanner = styled("div")`
	width: 100%;
	height: 400px;
	background-color: yellow;
`;

const Events = styled("div")`
	width: 100%;
	height: 398px;
	background-color: pink;
`;

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
			<TopBanner>탑배너</TopBanner>
			<Events>이벤트</Events>
			<ItemsOnSale>이벤트</ItemsOnSale>
			<OpenseaTopCollections>이벤트</OpenseaTopCollections>
			<OnBoarding>온보딩</OnBoarding>
			<Footer>푸터</Footer>
		</>
	);
}

export default App;
