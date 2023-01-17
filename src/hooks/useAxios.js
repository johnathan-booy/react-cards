import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

// useAxios is a custom React hook that accepts a base URL as an input.
// It returns an array containing the response data and a function to make a GET request to a specified endpoint.
// The function takes an endpoint as an input and using the axios library makes a GET request to the specified endpoint and the baseURL.
// The response data is stored in a state variable and returned by the hook.
// This allows a component to use the hook and access the data and function to make the GET request and update its own state with the response data.

const useAxios = (baseURL) => {
	const [data, setData] = useState([]);

	const fetchData = async (endpoint) => {
		console.log(endpoint);
		const url = endpoint === undefined ? baseURL : `${baseURL}/${endpoint}`;
		const response = await axios.get(url);
		setData([...data, { ...response.data, id: uuid() }]);
	};

	return [data, fetchData];
};

export default useAxios;
