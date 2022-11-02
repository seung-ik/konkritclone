import React from "react";
import styled from "styled-components";

const Container = styled("div")`
	padding: 40px 16px;
	width: 100%;
	padding: 40px 16px;
`;

const SectionLayout = ({ children }) => {
	return <Container>{children}</Container>;
};

export default SectionLayout;
