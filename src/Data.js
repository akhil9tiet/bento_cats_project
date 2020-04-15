import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Data = () => {
	const [data, setData] = useState({
		catsData: [],
		notFavoriteCatsData: [],
		showFav: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			const imgData = await axios.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25');
			const factsData = await axios.get('https://catfact.ninja/facts?limit=25');
			console.log(factsData);
			const catsArray = [];
			for (let i = 0; i < 25; i++) {
				let catObj = {};
				catObj['id'] = i;
				catObj['image'] = imgData.data[i].url;
				catObj['fact'] = factsData.data.data[i].fact;
				catObj['favorite'] = 'false';
				catsArray.push(catObj);
			}

			setData({ ...data, catsData: catsArray });
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(data);

	return <h1>Ajghikl</h1>;
};

export default Data;
