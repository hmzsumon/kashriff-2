import React from 'react';

const ContactInfo = () => {
	return (
		<>
			<div className='contact-info'>
				<h4 className='text-white'>What’s your story? Get in touch</h4>
				<p className='text-white'>
					Always available for freelancing if the right project comes along,
					Feel free to contact me.
				</p>

				<ul>
					<li className='media text-white'>
						<i className='icon icon-map'></i>
						<span className='media-body text-white'>
							House-34, Road-01, Plot-71 / Block-B, Chandalbog, (Near12 no
							Sector) Uttara Khalpar Turag Dhaka 1230
						</span>
					</li>
					{/* End li */}

					<li className='media'>
						<i className='icon icon-envelope'></i>
						<span className='media-body text-white'>
							info@kashriff@gmail.com
						</span>
					</li>
					{/* End li */}

					<li className='media'>
						<i className='icon icon-phone'></i>
						<span className='media-body text-white'>
							+88 01711 167619 / 01511 167619
						</span>
					</li>
					{/* End li */}
				</ul>
			</div>
			{/* End .contact-info */}
		</>
	);
};

export default ContactInfo;
