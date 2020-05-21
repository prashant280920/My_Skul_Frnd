import React from 'react';
import Socialids from './idsicon';


const Card = (props) => {
	const {id, name, email, fbid, instaid} = props;
	return(

		<div className="bg-light-green dib br3 grow pa3 ma2 shadow-5 tc">
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
			
			<Socialids fbid={fbid} instaid={instaid} />
			
		</div>
	);
}
export default Card;