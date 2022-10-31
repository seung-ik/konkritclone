import React from "react";
import styled from "styled-components";
import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import Wallet from "@components/atoms/Wallet";
import KaiKas_image from "@assets/image/kaikas.png";

const Container = styled("div")`
	position: fixed;
	top: 0;
	align-items: center;
	display: flex;
	width: 100%;
	height: 64px;
	padding: 0 16px;
	background-color: ${colors.bgBlack};
	z-index: 999;
`;

const LogoWrapper = styled("div")`
	margin-right: 16px;
	display: flex;
	align-items: center;
`;

const SearchBarWrapper = styled("div")`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	border-left: 1px solid hsla(0, 0%, 100%, 0.12);
	padding-left: 16px;
`;

const GrayRoundBox = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${colors.bgSecondary};
`;

const WalletRoundBox = styled(GrayRoundBox)`
	background-color: ${colors.textYellow};
	margin-right: 8px;
`;

const Header = () => {
	return (
		<Container>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			<SearchBarWrapper>
				<SearchIcon />
			</SearchBarWrapper>
			<WalletRoundBox color={colors.textYellow}>
				<Wallet />
			</WalletRoundBox>
			<GrayRoundBox color={colors.bgSecondary}>
				<HamburgerIcon />
			</GrayRoundBox>
		</Container>
	);
};

export default Header;
