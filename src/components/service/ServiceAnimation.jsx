import React from 'react';

const ServiceContent = [
	{
		icon: 'Graphics-Design-icon-png',
		title: 'Graphics Designing',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		icon: 'Apparel-Designing-CLO-3d-png',
		title: 'Apparel Designing(CLO 3D)',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		icon: 'FOOTWEAR-DWSIGN-png',
		title: 'Footwear Designing',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		icon: 'Embroidery-Design-Png',
		title: 'Embroidery Designing',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		icon: 'UI-UX-DESIGN-Png',
		title: 'Ui/Ux Designing',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		icon: 'Packging-&-Photo-Editing-Png',
		title: 'Packaging, Photo Editing',
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
];
export default function Service() {
	return (
		<>
			<div className='row'>
				{ServiceContent.map((val, i) => (
					<div
						className='col-md-6 col-lg-4 my-3'
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<div className='feature-box-01'>
							<div
								className='icon'
								style={{ position: 'relative', height: '235px' }}
							>
								{/* <i className={`icon ${val.icon}`}></i> */}
								<img
									src={`img/icons/${val.icon}.png`}
									alt=''
									style={{
										width: '80px',
										position: 'absolute',
										top: '-20px',
										left: '-20px',
									}}
								/>
							</div>
							<div
								className='feature-content'
								style={{ position: 'absolute', top: '100px' }}
							>
								<h5>{val.title}</h5>
								<p>{val.descriptions}</p>
							</div>
						</div>
						{/* End .feature-box-01 */}
					</div>
				))}
			</div>
		</>
	);
}
