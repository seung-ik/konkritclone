import React from "react";
import styled from "styled-components";
import useCountDown from "../../hooks/useCountDown";

const CountDownWrapper = styled("div")`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
`;

const EachCountWrapper = styled.div`
	display: flex;
`;

const CountText = styled("div")`
	font-family: MarkPro-Heavy;
	font-size: 36px;
	line-height: 45.63px;
	align-self: flex-start;
`;

const UnitText = styled("div")`
	font-size: 18px;
	line-height: 27px;
	align-self: flex-end;
`;

const CountDown = ({ targetDate }) => {
	// month 경우 인덱스 이기때문에 월 하나 빼서 들어감
	const { countDown, isClosed, isCommigSoon } = useCountDown(targetDate);

	const day = Math.floor(countDown / 1000 / 60 / 60 / 24);
	const hour = Math.floor((countDown / 1000 / 60 / 60) % 24);
	const min = Math.floor((countDown / 1000 / 60) % 60);
	const second = Math.floor((countDown / 1000) % 60);

	if (isClosed) {
		return (
			<CountDownWrapper>
				<CountText>CLOSED</CountText>
			</CountDownWrapper>
		);
	}

	if (isCommigSoon) {
		return (
			<CountDownWrapper>
				<CountText>COMMINGSOON</CountText>
			</CountDownWrapper>
		);
	}

	return (
		<CountDownWrapper>
			<EachCountWrapper>
				<CountText>{day}</CountText>
				<UnitText>일</UnitText>
			</EachCountWrapper>
			<EachCountWrapper>
				<CountText>{hour}</CountText>
				<UnitText>시간</UnitText>
			</EachCountWrapper>
			<EachCountWrapper>
				<CountText>{min}</CountText>
				<UnitText>분</UnitText>
			</EachCountWrapper>
			<EachCountWrapper>
				<CountText>{second}</CountText>
				<UnitText>초</UnitText>
			</EachCountWrapper>
		</CountDownWrapper>
	);
};

export default CountDown;
