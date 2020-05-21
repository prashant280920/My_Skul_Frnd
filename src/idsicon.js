import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Socialids = (props) => {
	const { fbid, instaid } = props;
	if (fbid === '' && instaid!==""){
		return (<div><ul><li className="dib mr4 grow-large"><SocialIcon url={`http://instagram.com/${instaid}`} bgColor="black" fgColor="white" /></li></ul></div>);
		
	}
	else if (fbid !== '' && instaid===''){
		return (<div><ul><li className="dib mr3 grow-large"><SocialIcon url={`http://facebook.com/${fbid}`} bgColor="black" fgColor="white" /></li></ul></div>); 
	}
	else if (fbid !== '' && instaid !== ''){
		return(
			<div>
				<ul>
					<li className="dib mr3 grow-large"><SocialIcon url={`http://facebook.com/${fbid}`} bgColor="black" fgColor="white" /></li>
					<li className="dib mr4 grow-large"><SocialIcon url={`http://instagram.com/${instaid}`} bgColor="black" fgColor="white" /></li>
				</ul>
			</div>
		);

	}
	else{
		return <div></div>
	}
}



export default Socialids;