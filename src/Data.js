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

	console.log(data);

	useEffect(() => {
		catImage();
		catFact();
	}, [catFact, catImage, data]);

	async function catImage() {
		const resultImg = await axios.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25');
		setData({ ...data, catsImg: resultImg });
	}

	async function catFact() {
		const resultFact = await axios.get('https://catfact.ninja/facts?limit=25');
		setData({ ...data, catsFact: resultFact });
	}

	console.log(data);

	return <h1>Ajghikl</h1>;
};

export default Data;
