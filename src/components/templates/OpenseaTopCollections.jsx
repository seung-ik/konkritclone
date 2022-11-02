import React from "react";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";
import styled from "styled-components";
import * as colors from "@styles/colors";
import Ether from "@components/atoms/Ether";

const CollectionList = styled("ul")`
	margin-top: 16px;
`;

const CollectionItem = styled("li")`
	padding: 12px 16px;
	border-bottom: 1px solid ${colors.borderSecondary};
`;

const CollectionInfo = styled("div")`
	display: flex;
	align-items: center;
	height: 40px;
	margin-bottom: 24px;
`;

const RankText = styled("div")`
	font-family: MarkPro-Heavy;
	font-size: 14px;
	font-color: ${colors.textYellow};
`;

const Thumbnail = styled("img")`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-left: 24px;
	background-color: ${colors.bgSecondary};
	object-fit: contain;
`;

const CollectionName = styled("span")`
	font-weight: 500px;
	margin-left: 12px;
`;

const CollectionPriceInfo = styled("div")`
	height: 60px;
	padding: 0 28px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
`;

const NormalText = styled("span")`
	font-size: 12px;
	color: ${colors.textSecondary};
`;

const NumberText = styled(NormalText)`
	color: ${colors.textGreen};
`;

const PriceText = styled("span")`
	font-family: MarkPro-Heavy;
	font-size: 14px;
	margin-left: 4px;
`;

const SpanDoubleWrapper = styled("span")`
	grid-column: 2 / 4;
`;

const PriceWrapper = styled("div")`
	display: flex;
`;

const OpenseaTopCollections = () => {
	return (
		<SectionLayout>
			<SectionTop title="많이 거래된 컬렉션" showAll="오픈씨 데이터 기준" />
			<CollectionList>
				{[1, 2, 3, 4, 5].map((el) => {
					return (
						<CollectionItem>
							<CollectionInfo>
								<RankText>{el}</RankText>
								<Thumbnail src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png" />
								<CollectionName>GeniundUndead</CollectionName>
							</CollectionInfo>
							<CollectionPriceInfo>
								<NormalText>최저가</NormalText>
								<SpanDoubleWrapper>
									<PriceWrapper>
										<Ether />
										<PriceText>0.01</PriceText>
									</PriceWrapper>
								</SpanDoubleWrapper>
								<NormalText>24h 거래량</NormalText>
								<PriceWrapper>
									<Ether />
									<PriceText>0.01</PriceText>
								</PriceWrapper>
								<NumberText>+ 5.7%</NumberText>
							</CollectionPriceInfo>
						</CollectionItem>
					);
				})}
			</CollectionList>
		</SectionLayout>
	);
};

export default OpenseaTopCollections;
