import HideScrollX from "../molecules/HideScrollX";
import Item from "@components/molecules/Item";
import LoadingSpinner from "../atoms/LoadingSpiner";
import useData from "../../hooks/useData";

const Items = () => {
	const { data, isLoading, isError } = useData("http://localhost:3000/api/items", { items: [] });

	if (isLoading) {
		return (
			<div style={{ width: "100%", height: "275px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<LoadingSpinner />
			</div>
		);
	}

	if (isError) {
		return <div>...에러</div>;
	}
	return (
		<HideScrollX>
			{data.items.map((item) => (
				<Item item={item} key={item.id} />
			))}
		</HideScrollX>
	);
};

export default Items;
