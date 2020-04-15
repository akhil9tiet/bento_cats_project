import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Data = () => {
	const [data, setData] = useState({ catsImg: [], catsFact: [] });

	// useEffect(() => {
	// 	axios
	// 		.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25')
	// 		.then((res) => setData({ ...data, catsImg: res.data }))
	// 		.catch((err) => console.log('errrrrrrrrr', err))
	// 		.then(
	// 			axios
	// 				.get('https://catfact.ninja/facts?limit=25')
	// 				.then((res) => setData({ ...data, catsFact: res.data.data }))
	// 				.catch((err) => console.log(err))
	// 		);
	// }, [data]);

	// console.log(data);

	// useEffect(() => {
	// 	catImage();
	// 	catFact();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	// async function catImage() {
	// 	const resultImg = await axios.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25');
	// 	setData({ ...data, catsImg: resultImg.data });
	// }

	// async function catFact() {
	// 	const resultFact = await axios.get('https://catfact.ninja/facts?limit=25');
	// 	setData({ ...data, catsFact: resultFact.data.data });
	// }

	useEffect(() => {
		const fetchData = async () => {
			const imgData = await axios.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25');
			const factsData = await axios.get('https://catfact.ninja/facts?limit=25');

			setData({ data: imgData.data, repos: factsData.data });
		};

		fetchData();
	}, []);

	console.log(data);

	return <h1>Ajghikl</h1>;
};

export default Data;
