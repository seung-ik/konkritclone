import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";
import SectionTop from "../molecules/SectionTop";
import Items from "../organisms/Items";

const Container = styled("div")`
	width: 100%;
	height: 398px;
	padding: 40px 16px;
	background-color: ${colors.bgPrimary};
`;

const ItemsOnSale = () => {
	return (
		<Container>
			<SectionTop title="지금 판매중인 아이템" showAll="아이템 전체보기" />
			<Items />
		</Container>
	);
};

export default ItemsOnSale;
