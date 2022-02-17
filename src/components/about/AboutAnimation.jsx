import React from 'react';
import Social from '../Social';
import Testimonials from '../testimonial/TestimonialAnimation';
import Services from '../service/ServiceAnimation';
import Awards from '../award/AwardsAnimation';
import Interest from '../Interest/Interest';

const About = () => {
	return (
		<>
			<section id='about' className='section theme-light dark-bg'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<div
							className='col-md-6 col-lg-4'
							data-aos='fade-up'
							data-aos-duration='1200'
						>
							<div className='about-me'>
								<div className='img'>
									<div className='img-in'>
										<img src='img/about/kk-1.png' alt='about' />
									</div>

									<Social />

									{/* End social icon */}
								</div>
								{/* End img */}
								<div className='info'>
									<p>UI/UX CAD & 3D fashion graphics of (apparel & footwear)</p>
									<h3>KASHRIFF Kawser</h3>
								</div>
								{/* End info */}
							</div>
							{/* End about-me */}
						</div>
						{/* End col */}

						<div
							className='col-lg-7 ml-auto'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-delay='200'
						>
							<div className='about-info'>
								<div className='title'>
									<h3>Biography</h3>
								</div>
								<div className='about-text'>
									<p>
										I am a designer of UI?UX CAD & 3D fashion graphics of
										(apparel & footwear) over 10 years of experience. I am from
										Dhaka, Bangladesh & a skillful developer of front-end mobile
										& web utilizing Adobe XD, Figma, After Effect, 3D fashion
										graphic design of (apparels & footwear) is my passion which
										leads my work to satisfactory level of my clients. Besides,
										I am capable of handing works from designing to final stage
										of (apparel & footwear) production as well as familiar &
										comfortable in using software Clo 3D, Shoemaster, Photoshop,
										Illustrator, Wilcome Embroidery Studio, Lactra, etc.
									</p>
								</div>
								<div className='info-list'>
									<div className='row'>
										<div className='col-sm-6'>
											<ul>
												<li>
													<label>Name: </label>
													<span>Kashriff Kawser</span>
												</li>
												<li>
													<label>Birthday: </label>
													<span>15 May 1993</span>
												</li>
												<li>
													<label>Age: </label>
													<span>28 years</span>
												</li>
												<li>
													<label>Address: </label>
													<span>Barisal-Bangladesh</span>
												</li>
											</ul>
										</div>
										<div className='col-sm-6'>
											<ul>
												<li>
													<label>Phone: </label>
													<span>(+38) 469 2344 2364</span>
												</li>
												<li>
													<label>Email: </label>
													<span>info@domainname.com</span>
												</li>
												<li>
													<label>Skype: </label>
													<span>nairob.40</span>
												</li>
												<li>
													<label>Freelance: </label>
													<span>Available</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End col */}
					</div>

					{/* separated */}

					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>

					{/* End separated */}
					<div className='title'>
						<h3>What I do?</h3>
					</div>

					<Services />

					{/* End .row */}

					{/* separated */}
					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>
					{/* End separated */}

					<div className='title'>
						<h3>Awards.</h3>
					</div>

					<Awards />
					{/* End Awards */}

					{/* separated */}
					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>
					{/* End separated */}

					<div className='title'>
						<h3>Interest.</h3>
					</div>

					<Interest />
					{/* End Testimonaial */}
				</div>
			</section>
		</>
	);
};

export default About;
