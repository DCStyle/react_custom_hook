import { useState, useEffect } from "react";

export function useValueCheck() {
	const [ isEven, setIsEven ] = useState(true);

	useEffect(() => {
		const setValue = () => {
			fetch('https://dcstyle.info/call_api.php')
				.then(response => response.json())
				.then((jsonData) => {
					let value = jsonData.status;
					setIsEven(value === 'even');

					console.log(jsonData.currentHour);
				})
				.catch((error) => {
					console.log(error);
				})
		}

		setInterval(setValue, 3456);
	}, []);

	return isEven;
}