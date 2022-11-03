import React from "react";
import styled from "styled-components";
import Ether from "@components/atoms/Ether";
import * as colors from "@styles/colors";

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
	color: ${({ color }) => color};
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

const Collection = ({ collection, rank }) => {
	const isPlusVolumeChange = collection.oneDayVolumeChange > 0;
	return (
		<CollectionItem key={collection.id}>
			<CollectionInfo>
				<RankText>{rank}</RankText>
				<Thumbnail src={collection.imgUrl} />
				<CollectionName>{collection.name}</CollectionName>
			</CollectionInfo>
			<CollectionPriceInfo>
				<NormalText>최저가</NormalText>
				<SpanDoubleWrapper>
					<PriceWrapper>
						<Ether />
						<PriceText>{collection.floorPrice}</PriceText>
					</PriceWrapper>
				</SpanDoubleWrapper>
				<NormalText>24h 거래량</NormalText>
				<PriceWrapper>
					<Ether />
					<PriceText>{collection.oneDayVolume}</PriceText>
				</PriceWrapper>
				<NumberText color={isPlusVolumeChange ? colors.textGreen : colors.textRed}>
					{isPlusVolumeChange ? "+" : ""}
					{collection.oneDayVolumeChange}%
				</NumberText>
			</CollectionPriceInfo>
		</CollectionItem>
	);
};

export default Collection;
