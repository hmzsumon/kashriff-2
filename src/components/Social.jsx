import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaPinterestP,
	FaYoutube,
	FaBehance,
} from 'react-icons/fa';

const SocialShare = [
	{ Social: <FaFacebookF />, link: 'https://www.facebook.com/kashriffk1993' },
	{ Social: <FaTwitter />, link: 'https://www.linkedin.com/kashriffk1993' },
	{ Social: <FaInstagram />, link: 'https://www.instagram.com/kashriffk1993' },
	{ Social: <FaLinkedinIn />, link: 'https://twitter.com/kashriffk1993' },
	{ Social: <FaYoutube />, link: 'https://www.pinterest.com/kashriffk1993' },
	{ Social: <FaBehance />, link: 'https://www.pinterest.com/kashriffk1993' },
];

const Social = () => {
	return (
		<div className='nav social-icons justify-content-center'>
			{SocialShare.map((val, i) => (
				<a key={i} href={`${val.link}`} rel='noreferrer' target='_blank'>
					{val.Social}
				</a>
			))}
		</div>
	);
};

export default Social;
