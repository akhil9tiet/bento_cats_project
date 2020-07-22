/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
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
/***************************************************************/
//usePrevious implementation : https://usehooks.com/usePrevious/
/***************************************************************/

function usePrevious(value) {
	// The ref object is a generic container whose current property is mutable ...
	// ... and can hold any value, similar to an instance property on a class
	const ref = useRef();
	// Store current value in ref
	useEffect(() => {
		ref.current = value;
	}, [value]); // Only re-run if value changes
	// Return previous value (happens before update in useEffect above)
	return ref.current;
}

const App = () => {
	const [catsData, setCatsData] = useState([]);
	const prevCatsData = usePrevious(catsData);
	const [showFav, setShowFav] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const imgData = await axios.get('https://api.thecatapi.com/api/images/get?format=json&results_per_page=25');
			const factsData = await axios.get('https://catfact.ninja/facts?limit=25');
			const catsArray = [];
			for (let i = 0; i < 25; i++) {
				let catObj = {};
				catObj['id'] = i;
				catObj['image'] = imgData.data[i].url;
				catObj['fact'] = factsData.data.data[i].fact;
				catObj['favorite'] = false;
				catsArray.push(catObj);
			}
			setCatsData(catsArray);
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const favoriteCatsData = catsData.filter((d) => d.favorite);
	return (
		<React.Fragment>
			<h1>Bento Cats Project</h1>
			<Button
				disabled={favoriteCatsData.length === 0}
				variant='contained'
				color={showFav ? 'secondary' : 'inherit'}
				onClick={() => {
					showFav ? setCatsData(prevCatsData) : setCatsData(favoriteCatsData);
					setShowFav(!showFav);
				}}>{`Show ${showFav ? 'All' : 'Fav'}`}</Button>

			<Grid container className='container'>
				{catsData &&
					catsData.map((card, i) => {
						return (
							<Grid className='item' item xs={12} sm={6} md={4} lg={3} key={card.id}>
								<Card className='card'>
									<CardContent className='card-content'>
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
													onClick={() =>
														/******************************************************************************/
														//@known_as_bmf's solution: https://stackblitz.com/edit/react-hooks-demo-xeyy4e
														/******************************************************************************/
														setCatsData((prevState) =>
															prevState.map((c) =>
																c.id === card.id ? { ...c, favorite: !c.favorite } : c
															)
														)
													}
													aria-label='add to favorites'>
													<FavoriteIcon
														color={catsData && card.favorite ? 'secondary' : 'inherit'}
													/>
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
	);
};

export default App;
