import React from "react";
import styled from "styled-components";
import { textYellow, bgSecondary, bgBannerButton, textSecondary } from "@styles/colors";

const Container = styled("div")`
	width: 100%;
	height: 400px;
	margin-top: 64px;
	padding: 20px;

	& .wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		background: ${textYellow};
	}
`;

const Triangle1 = styled("div")`
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 0;
	border-bottom: 60px solid transparent;
	border-left: 60px solid ${bgSecondary};
`;

const Triangle2 = styled("div")`
	position: absolute;
	width: 0;
	bottom: 0;
	right: 0;
	height: 0;
	border-bottom: 60px solid ${bgSecondary};
	border-left: 60px solid transparent;
`;

const BannerOrderBox = styled("div")`
	width: 51px;
	height: 20px;
	background-color: ${bgBannerButton};
	border-radius: 6px;
	position: absolute;
	left: 16px;
	bottom: 16px;
	color: ${textSecondary};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	font-size: 14px;
`;

const TopBanner = () => {
	return (
		<Container>
			<div className="wrapper">
				<Triangle1 />
				<Triangle2 />
				<BannerOrderBox>1/2</BannerOrderBox>
			</div>
		</Container>
	);
};

export default TopBanner;
