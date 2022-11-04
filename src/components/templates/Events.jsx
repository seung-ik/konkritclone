import React from "react";
import styled, { keyframes } from "styled-components";
import * as colors from "@styles/colors";
import SectionLayout from "../molecules/SectionLayout";
import HideScrollX from "../molecules/HideScrollX";
import EventCard from "../molecules/EventCard";

const EventTopWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
`;

const shine = keyframes`
	from {
		background-position: 0%;
		opacity: 0.9;
	}

	to {
		background-position: 200%;
		opacity: 1;
	}
`;
const GradientSectionTitle = styled("span")`
	font-size: 18px;
	font-weight: 700;
	background: ${colors.textGradient};
	background-size: 200% auto;
	background-position: 0%;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${shine} 4s linear infinite;
`;

const ShowAllText = styled("span")`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 700;
	color: ${colors.textSecondary};
`;

const Events = () => {
	return (
		<SectionLayout>
			<EventTopWrapper>
				<GradientSectionTitle>KONKRIT ORIGINALS</GradientSectionTitle>
				<ShowAllText>이벤트 전체보기</ShowAllText>
			</EventTopWrapper>
			<HideScrollX>
				{/* {[1, 2, 3, 4].map((el) => ( */}
				<EventCard />
				{/* ))} */}
			</HideScrollX>
		</SectionLayout>
	);
};

export default Events;
