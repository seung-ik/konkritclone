import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";
import CountDown from "./CountDown";

const EventCardWrapper = styled("div")`
	width: 320px;
	height: 200px;
	border-radius: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.cardGradient};
	overflow: hidden;
	flex-shrink: 0;
`;

const EventTitles = styled("div")`
	margin-top: 16px;
`;

const EventSubTitle = styled("div")`
	font-weight: 600;
	font-size: 14px;
	color: ${colors.textSecondary};
`;

const EventTitle = styled("div")`
	margin-top: 4px;
	font-weight: 700;
	font-size: 16px;
`;

const EventCard = () => {
	return (
		<div>
			<EventCardWrapper>
				<CountDown />
			</EventCardWrapper>
			<EventTitles>
				<EventSubTitle>Medistock</EventSubTitle>
				<EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
			</EventTitles>
		</div>
	);
};

export default EventCard;
