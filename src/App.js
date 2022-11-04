import GlobalStyle from "./GlobalStyle";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";
import OnBoarding from "@components/templates/OnBoarding";
import Footer from "@components/templates/Footer";
import useAuth from "@hooks/useAuth";

const klaytn = window.klaytn;

function App() {
	const { user, setUser } = useAuth();
	useEffect(() => {
		if (!klaytn) {
			return;
		}

		const account = localStorage.getItem("_user");
		const currentKaikasAccount = klaytn.selectedAddress;
		if (!account || !currentKaikasAccount) {
			setUser("");
			localStorage.removeItem("_user");
		}
		if (account === currentKaikasAccount) setUser(account);
	}, [setUser]);

	useEffect(() => {
		if (!klaytn) {
			return;
		}

		const hadleChangeAccounts = () => {
			if (!user) {
				return;
			}

			const changedAccount = klaytn.selectedAddress;
			if (user !== changedAccount) {
				toast.success(`${user} > ${changedAccount}계정이 바뀌션군요`);
				setUser(changedAccount);
				localStorage.setItem("_user", changedAccount);
			}
		};

		klaytn.on("accountsChanged", hadleChangeAccounts);

		return () => {
			klaytn.off("accountsChanged", hadleChangeAccounts);
		};
	}, [user, setUser]);

	useEffect(() => {
		if (!klaytn) {
			return;
		}

		const handleNetworkChanged = () => {
			setUser("");
			localStorage.removeItem("_user");
			toast.warn(`네트워크 변경 됬네요? ${klaytn.networkVersion} 다시 로그인 좀`);
		};

		klaytn.on("networkChanged", handleNetworkChanged);
		return () => {
			klaytn.removeListener("networkChanged", handleNetworkChanged);
		};
	}, [setUser]);

	return (
		<>
			<GlobalStyle />
			<Header />
			<TopBanner />
			<Events />
			<ItemsOnSale />
			<OpenseaTopCollections />
			<OnBoarding />
			<Footer />
		</>
	);
}

export default App;
