import { useState, useEffect } from "react";
import axios from "axios";

export default function useData(url, initialState = []) {
	const [data, setData] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				setIsError(false);
				const res = await axios.get(url);
				setData(res.data);
			} catch (err) {
				console.log(err);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, [url]);

	return { data, isLoading, isError };
}
