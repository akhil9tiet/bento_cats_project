import React, { useState, useEffect } from 'react';
import './App.css';
var data = [
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
		id: 1,
		url: 'https://25.media.tumblr.com/tumblr_m2y7ezQvl81rnn1i7o1_500.jpg',
		fact: 'A happy cat holds her tail high and steady.',
		favorite: false,
	},
	{
		id: 1,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/80i.gif',
		fact: "The cat's footpads absorb the shocks of the landing when the cat jumps.",
		favorite: false,
	},
	{
		id: 4,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/FwgiToYPs.jpg',
		fact:
			'Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.',
		favorite: false,
	},
	{
		id: 5,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/GpaWAyWT6.jpg',
		fact: 'The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.',
		favorite: false,
	},
	{
		id: 6,
		url: 'https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/CfvDVOap6.jpg',
		fact:
			'The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.',
		favorite: false,
	}
];
const App = () => {
	const [hash, setHash] = useState(data);

	var homeData = [],
		favData = [];
	useEffect(() => {
		homeData = hash.filter((d) => !d.favorite);
		favData = hash.filter((d) => d.favorite);
		setHash([...favData, ...homeData]);
	}, []);
	console.log(hash);
	return (
		<div className='App'>
			<h1>Test</h1>
		</div>
	);
};

export default App;
