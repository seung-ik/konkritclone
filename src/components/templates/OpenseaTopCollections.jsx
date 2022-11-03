import React from "react";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";
import Collections from "../organisms/Collections";

const OpenseaTopCollections = () => {
	return (
		<SectionLayout>
			<SectionTop title="많이 거래된 컬렉션" showAll="오픈씨 데이터 기준" />
			<Collections />
		</SectionLayout>
	);
};

export default OpenseaTopCollections;
