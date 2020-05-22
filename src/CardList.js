import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {

	return (
		<div>{
	   		robots.map((user,i) => {
				return (
					<Card 
					key={i} 
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
					fbid={robots[i].fbid} 
					instaid={robots[i].instaid} 
					twitid={robots[i].twitid}
					gitid={robots[i].gitid}
					/>);
			})
	   	}
		</div>
	);
}

export default CardList;