import React, { useState } from "react";
import axios from "axios";

// useAxios is a custom React hook that accepts a URL as an input.
// It makes a GET request to the specified URL using the axios library and stores the response data in a state variable.
// The hook returns an array containing the response data and a function to make the GET request.
// This allows a component to use the hook and access the data and function to make the GET request and update its own state with the response data.

const useAxios = (url) => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(url);
		setData([...data, { ...response.data }]);
	};

	return [data, fetchData];
};

export default useAxios;
