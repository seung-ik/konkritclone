import React from "react";
import styled, { keyframes } from "styled-components";
import * as colors from "@styles/colors";
import SectionLayout from "../molecules/SectionLayout";
import HideScrollX from "../molecules/HideScrollX";
import EventCard from "../molecules/EventCard";
import eventImageOne from "@assets/image/event_one.png";
import eventImageTwo from "@assets/image/event_two.png";
import eventImageThree from "@assets/image/event_three.png";

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

const eventData = [
	{
		id: 1,
		imgUrl: eventImageOne,
		title: "메디소사이어티 NFT 프로젝트",
		subtitle: "Medistock",
		targetDate: new Date(2022, 11, 30),
	},
	{
		id: 2,
		imgUrl: eventImageTwo,
		title: "아티스트 Ohnim 프로젝트",
		subtitle: "YG K+",
		targetDate: new Date(2021, 11, 30),
	},
	{
		id: 3,
		imgUrl: eventImageThree,
		title: "아비투스 프리미엄 골프 멤버십 NFT",
		subtitle: "Habitus",
	},
];

const Events = () => {
	return (
		<SectionLayout>
			<EventTopWrapper>
				<GradientSectionTitle>KONKRIT ORIGINALS</GradientSectionTitle>
				<ShowAllText>이벤트 전체보기</ShowAllText>
			</EventTopWrapper>
			<HideScrollX>
				{eventData.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</HideScrollX>
		</SectionLayout>
	);
};

export default Events;
