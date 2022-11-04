import { useState, useEffect } from "react";

function useCountDown(targetDate) {
	const [countDown, setCountDown] = useState(() => {
		return targetDate - new Date();
	});

	const isClosed = countDown <= 0;
	const isCommigSoon = isNaN(targetDate);

	useEffect(() => {
		const id = setInterval(() => {
			setCountDown((prev) => Math.max(prev - 1000, 0));
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return { countDown: countDown > 0 ? countDown : 0, isClosed, isCommigSoon };
}

export default useCountDown;
