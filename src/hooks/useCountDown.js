import { useState, useEffect } from "react";

function useCountDown(targetDate) {
	const [countDown, setCountDown] = useState(() => {
		return targetDate - new Date();
	});

	useEffect(() => {
		const id = setInterval(() => {
			setCountDown((prev) => Math.max(prev - 1000, 0));
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return countDown > 0 ? countDown : 0;
}

export default useCountDown;
