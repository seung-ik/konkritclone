import React from "react";
import styled from "styled-components";
import useData from "../../hooks/useData";
import Collection from "../molecules/Collection";
import LoadingSpinner from "../atoms/LoadingSpiner";

const CollectionList = styled("ul")`
	margin-top: 16px;
`;

const Collections = () => {
	const { data, isLoading, isError } = useData("http://localhost:3000/api/opensea-top-collections", { openseaCollections: [] });

	if (isLoading) {
		return (
			<div style={{ width: "100%", height: "1604px", display: "flex", alignItems: "center", justifyContent: "center" }}>
				<LoadingSpinner />
			</div>
		);
	}

	if (isError) {
		return <div>에러...</div>;
	}
	return (
		<CollectionList>
			{data.openseaCollections.map((collection, i) => (
				<Collection key={collection.id} collection={collection} rank={i + 1} />
			))}
		</CollectionList>
	);
};

export default Collections;
