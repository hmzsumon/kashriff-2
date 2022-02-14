import React from 'react';

const interestContent = [
	{
		img: 'swimming',
		name: 'Swimming',
	},
	{
		img: 'research',
		name: 'Research',
	},
	{
		img: 'acting',
		name: 'Acting',
	},
	{
		img: 'traveling',
		name: 'Traveling',
	},
];

const Interest = () => {
	return (
		<>
			<div className='row bg-dark pt-5'>
				<div className=''>
					<h3 className='title-interest'>Interest</h3>
				</div>
				{interestContent.map((val, i) => (
					<div className='col-lg-3  m-15px-tb' key={i}>
						<div className='feature-box-02 d-flex  justify-content-center bg-white align-items-center'>
							<div className='icon'>
								<img
									src={`img/interest/${val.img}.png`}
									alt='award'
									style={{ width: '100%', height: '100%' }}
								/>
							</div>
						</div>
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Interest;
