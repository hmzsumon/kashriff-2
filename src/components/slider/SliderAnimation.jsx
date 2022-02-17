import React from 'react';
import TextLoop from 'react-text-loop';

const conctInfo = {
	phone: '+88 01711167619 / 01511167619',
	email: ' info@kashriff.xyz / kasriff@gmail.com',
};

const sliderContent = {
	name: 'KASHRIFF Kawser',
	description: `I am specialized in shophisticated UI/UX , CAD and 3D fashion graphics for apparels and foot wear. I provide all services to all sizes of clients regarding all these designing.`,
	btnText: ' Donwload CV',
};

const Slider = () => {
	return (
		<>
			{/*  Home Banner */}
			<section id='home' className='home-banner'>
				<div className='hb-top-fixed d-flex'>
					<div className='hb-info'>
						<a href='tel:+04 6545-9535-6515'>{conctInfo.phone}</a>
						<a href='mailto:mail%20to:ibthemes21@gmail.com,com'>
							{conctInfo.email}
						</a>
					</div>
					{/* <div className='hb-lang'>
						<ul className='nav'>
							<li className='active'>
								<a href='#'>EN</a>
							</li>
							<li>
								<a href='#'>FR</a>
							</li>
						</ul>
					</div> */}
				</div>
				{/* End hp-top-fixed */}

				<div className='container'>
					<div className='row full-screen align-items-center'>
						<div className='col-lg-7'>
							<div className='type-box'>
								<h6 data-aos='fade-up' data-aos-duration='1200'>
									Hello, My name is
								</h6>
								<h1
									className='font-alt'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='100'
								>
									{sliderContent.name}
								</h1>
								<div
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='200'
								>
									<TextLoop>
										<p className='loop-text lead'>Graphics Designing</p>
										<p className='loop-text lead'> Apparel Designing</p>
										<p className='loop-text lead'> Footwear Designing</p>
										<p className='loop-text lead'> Ui/Ux Designing</p>
										<p className='loop-text lead'> Embroidery Designing</p>
										<p className='loop-text lead'>
											{' '}
											Garmments Pattren Designing
										</p>
										<p className='loop-text lead'>
											{' '}
											CLO 3D/Marvelous Designing
										</p>
										<p className='loop-text lead'>
											{' '}
											Packaging, Photo Editing, Video Editing
										</p>
									</TextLoop>
								</div>

								<p
									className='desc'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='300'
								>
									{sliderContent.description}
								</p>
								<div
									className='mt-4'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='400'
								>
									<a
										className='px-btn px-btn-white'
										href='img/resume.png'
										download
									>
										{sliderContent.btnText}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Container*/}
				<div
					className='hb-me'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + 'img/slider/home-banner.png'
						})`,
					}}
				></div>
			</section>

			{/* End Home Banner  */}
		</>
	);
};

export default Slider;
