import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

import './App.css';

const data = [
	{
		id: 1,
		url: 'https://25.media.tumblr.com/tumblr_mcpa8zbbiZ1qze0hyo1_500.jpg',
		fact: "The cat's footpads absorb the shocks of the landing when the cat jumps.",
		favorite: false,
	},
	{
		id: 2,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/538.gif',
		fact:
			'In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and carted off to be used by farmers in England and the U.S. for fertilizer.',
		favorite: false,
	},
	{
		id: 3,
		url: 'https://25.media.tumblr.com/Jjkybd3nS9i6ue722w9M27AG_500.jpg',
		fact: 'Blue-eyed, white cats are often prone to deafness.',
		favorite: false,
	},
	{
		id: 4,
		url: 'https://25.media.tumblr.com/tumblr_m2y7ezQvl81rnn1i7o1_500.jpg',
		fact: 'A happy cat holds her tail high and steady.',
		favorite: false,
	},
	{
		id: 5,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/80i.gif',
		fact: "The cat's footpads absorb the shocks of the landing when the cat jumps.",
		favorite: false,
	},
	{
		id: 6,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/FwgiToYPs.jpg',
		fact:
			'Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.',
		favorite: false,
	},
	{
		id: 7,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/GpaWAyWT6.jpg',
		fact: 'The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.',
		favorite: false,
	},
	{
		id: 8,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/CfvDVOap6.jpg',
		fact:
			'The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.',
		favorite: false,
	},
];
const App = () => {
	const [hash, setHash] = useState(data);

	return (
		<React.Fragment>
			<h1>Bento Cats Project</h1>
			<Button variant='contained' color='secondary'>
				View Only Favorite Cards
			</Button>

			<Grid container className='container'>
				{hash.map((card, i) => {
					return (
						<Grid className='item' item xs={12} sm={6} md={4} lg={3} key={card.id}>
							<Card>
								<CardContent>
									<CardMedia style={{ height: 450 }} image={card.url} title={card.id} />
									<div className='content'>
										<Typography variant='body2' component='p'>
											{card.fact}
										</Typography>
										<br />
										<div className='icon'>
											<IconButton
												onClick={() => {
													const restD = hash.filter((el) => el.id !== card.id);
													card.favorite
														? setHash([
																...restD,
																{
																	id: card.id,
																	url: card.url,
																	fact: card.fact,
																	favorite: !card.favorite,
																},
														  ])
														: setHash([
																{
																	id: card.id,
																	url: card.url,
																	fact: card.fact,
																	favorite: !card.favorite,
																},
																...restD,
														  ]);
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
	);
};

export default App;
