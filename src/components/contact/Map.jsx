import React from 'react';

const Map = () => {
	return (
		<>
			<div className='google-map'>
				<div className='embed-responsive embed-responsive-21by9'>
					<iframe
						className='embed-responsive-item'
						title='location title'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116828.28381719145!2d90.33138003408664!3d23.787149385702808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c430a1eddab3%3A0xa405a6e9c670652a!2s34%20Road-01!5e0!3m2!1sen!2sbd!4v1644845283764!5m2!1sen!2sbd'
					></iframe>
				</div>
			</div>
			{/* End google-map */}
		</>
	);
};

export default Map;
