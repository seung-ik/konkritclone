import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";

const SectionTopWrapper = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SectionTitle = styled("span")`
	font-size: 18px;
	font-weight: 700;
`;

const ShowAllText = styled("span")`
	font-size: 14px;
	color: ${colors.textSecondary};
`;

const SectionTop = ({ title, showAll }) => {
	return (
		<SectionTopWrapper>
			<SectionTitle>{title}</SectionTitle>
			<ShowAllText>{showAll}</ShowAllText>
		</SectionTopWrapper>
	);
};

export default SectionTop;
