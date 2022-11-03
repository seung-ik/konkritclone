import React from "react";
import styled, { keyframes } from "styled-components";
import * as colors from "@styles/colors";
import SectionLayout from "../molecules/SectionLayout";
import HideScrollX from "../molecules/HideScrollX";

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

const CountDownWrapper = styled("div")`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
`;

const EachCountWrapper = styled.div`
	display: flex;
`;

const CountText = styled("div")`
	font-family: MarkPro-Heavy;
	font-size: 36px;
	line-height: 45.63px;
	align-self: flex-start;
`;

const UnitText = styled("div")`
	font-size: 18px;
	line-height: 27px;
	align-self: flex-end;
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
const Events = () => {
	return (
		<SectionLayout>
			<EventTopWrapper>
				<GradientSectionTitle>KONKRIT ORIGINALS</GradientSectionTitle>
				<ShowAllText>이벤트 전체보기</ShowAllText>
			</EventTopWrapper>
			<HideScrollX>
				{[1, 2, 3, 4].map((el) => {
					return (
						<div key={el}>
							<EventCardWrapper>
								<CountDownWrapper>
									<EachCountWrapper>
										<CountText>08</CountText>
										<UnitText>일</UnitText>
									</EachCountWrapper>
									<EachCountWrapper>
										<CountText>08</CountText>
										<UnitText>일</UnitText>
									</EachCountWrapper>
									<EachCountWrapper>
										<CountText>08</CountText>
										<UnitText>일</UnitText>
									</EachCountWrapper>
									<EachCountWrapper>
										<CountText>08</CountText>
										<UnitText>일</UnitText>
									</EachCountWrapper>
								</CountDownWrapper>
							</EventCardWrapper>
							<EventTitles>
								<EventSubTitle>Medistock</EventSubTitle>
								<EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
							</EventTitles>
						</div>
					);
				})}
			</HideScrollX>
		</SectionLayout>
	);
};

export default Events;
