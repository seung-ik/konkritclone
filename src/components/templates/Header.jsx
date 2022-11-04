import React from "react";
import styled from "styled-components";
import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import Wallet from "@components/atoms/Wallet";
import kaikasImageUrl from "@assets/image/kaikas.png";
import { toast } from "react-toastify";
import useAuth from "@hooks/useAuth";

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
	cursor: pointer;
`;

const KaikasImage = styled("img")`
	width: 20px;
	height: 20px;
`;
async function isKaikasAvailable() {
	const klaytn = window?.klaytn;
	if (!klaytn) {
		return false;
	}

	const results = await Promise.all([klaytn._kaikas.isApproved(), klaytn._kaikas.isEnabled(), klaytn._kaikas.isUnlocked()]);

	return results.every((res) => res);
}

const Header = () => {
	// console.log(window.klaytn.enable());
	const { user, setUser } = useAuth();

	async function loginWithKaikas() {
		if (!window.klaytn) {
			toast.error("카이카스설치하고 오세요~", { position: toast.POSITION.TOP_CENTER });
			return;
		}
		const klaytn = window.klaytn;

		try {
			const account = await toast.promise(klaytn.enable(), { pending: "지갑연동중" }, { closeButton: true });
			console.log(account);
			setUser(account[0]);
			localStorage.setItem("_user", account[0]);
			toast.success(`${account[0].slice(0, 13)}...화녕ㅇ함니다`);
		} catch (err) {
			toast.error("로그인 실패");
		}
	}

	function handleLogin() {
		loginWithKaikas();
	}

	async function handleDone() {
		const isAvailable = await isKaikasAvailable();
		if (isAvailable) {
			toast.error("그만");
			return;
		}
		toast.warn("다시 로긴 해주세요~");
		setUser("");
		localStorage.removeItem("_user");
	}
	return (
		<Container>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			<SearchBarWrapper>
				<SearchIcon />
			</SearchBarWrapper>
			<WalletRoundBox color={colors.textYellow} onClick={user ? handleDone : handleLogin}>
				{user ? <KaikasImage src={kaikasImageUrl}></KaikasImage> : <Wallet />}
			</WalletRoundBox>
			<GrayRoundBox color={colors.bgSecondary}>
				<HamburgerIcon />
			</GrayRoundBox>
		</Container>
	);
};

export default Header;
