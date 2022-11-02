import React from "react";
import styled from "styled-components";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";
import onboardFaqImg from "@assets/image/onboard_faq.png";
import onboardKonkritImg from "@assets/image/onboard_konkrit.png";
import onboardNftImg from "@assets/image/onboard_nft.png";
import onboardWalletImg from "@assets/image/onboard_wallet.png";

const OnBoardList = styled("ul")`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 24px;
	gap: 24px;
`;

const OnBoardImage = styled("img")`
	margin-bottom: 8px;
	display: block;
	width: 100%;
`;

const OnBoardText = styled("span")`
	font-weight: 500;
	font-size: 14px;
`;

const onBoardData = [
	{ id: 1, imgUrl: onboardFaqImg, title: "NFT란?" },
	{ id: 2, imgUrl: onboardKonkritImg, title: "지갑 생성 및 연결하기" },
	{ id: 3, imgUrl: onboardNftImg, title: "KONKRIT 이용방법" },
	{ id: 4, imgUrl: onboardWalletImg, title: "자주 묻는 질문" },
];

const OnBoarding = () => {
	return (
		<SectionLayout>
			<SectionTop title="KONKRIT, 이렇게 사용하세요" showAll="가이드 전체보기" />
			<OnBoardList>
				{onBoardData.map((el) => {
					return (
						<li>
							<OnBoardImage src={el.imgUrl}></OnBoardImage>
							<OnBoardText>{el.title}</OnBoardText>
						</li>
					);
				})}
			</OnBoardList>
		</SectionLayout>
	);
};

export default OnBoarding;
