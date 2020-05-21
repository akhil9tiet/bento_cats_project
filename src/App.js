/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

import './App.css';

const App = () => {
	const [hash, setHash] = useState({
		catsdata: [],
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
				catObj['favorite'] = false;
				catsArray.push(catObj);
			}
			setHash({ ...hash, catsdata: catsArray });
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(hash);
	const favoriteCatsData = hash.catsdata.filter((d) => d.favorite);

	return (
		<React.Fragment>
			<h1>Bento Cats Project</h1>
			<Button
				disabled={favoriteCatsData.length === 0}
				variant='contained'
				color={hash.showFav ? 'secondary' : 'inherit'}
				onClick={() => {
					// const nonFavoritecatsdata = hash.catsdata.filter((d) => !d.favorite);
					// const favoriteCatsData = hash.catsdata.filter((d) => d.favorite);

					if (hash.showFav) {
						setHash({
							...hash,
							catsdata: [...favoriteCatsData, ...hash.notFavoriteCatsData],
							showFav: false,
						});
					} else {
						setHash({
							...hash,
							notFavoriteCatsData: hash.catsdata.filter((d) => !d.favorite),
							catsdata: [...favoriteCatsData],
							showFav: true,
						});
					}
				}}>{`Show ${hash.showFav ? 'All' : 'Fav'}`}</Button>

			<Grid container className='container'>
				{hash.catsdata.map((card, i) => {
					return (
						<Grid className='item' item xs={12} sm={12} md={4} lg={3} key={card.id}>
							<Card className='card'>
								<CardContent>
									<CardMedia
										style={{ height: 450, width: '100%' }}
										image={card.image}
										title={card.id}
									/>
									<div className='content'>
										<Typography variant='body2' component='p'>
											{card.fact}
										</Typography>
										<br />
										<div className='icon'>
											<IconButton
												onClick={() => {
													const restD = hash.catsdata.filter((el) => el.id !== card.id);

													card.favorite
														? setHash({
																...hash,
																catsdata: [
																	...restD,
																	{ ...card, favorite: !card.favorite },
																],
														  })
														: setHash({
																...hash,
																catsdata: [
																	{ ...card, favorite: !card.favorite },
																	...restD,
																],
														  });
												}}
												aria-label='add to favorites'>
												<FavoriteIcon color={card.favorite ? 'secondary' : 'inherit'} />
											</IconButton>
										</div>
									</div>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</React.Fragment>
		// <Data />
	);
};

export default App;
