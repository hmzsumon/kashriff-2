import React from 'react';
import Skills from '../skills/Skills';

const resumeContent = [
	{
		jobPosition: `Sr. Exe. Designer`,
		jobType: `Lotto / Lee Copper`,
		jobDuration: `2006 To Running`,
		timeDuraton: `Full Time`,
		compnayName: 'Google LLC',
		jobDescription: `Utilizing my best creative skills and experiences through my dedication and heard working to develop a unique product of organization to become a Creative Skillful Designer on 3D Fashion Graphics, Embroidery, and (CLO/ShoeMaster) 3D CAD Designing.`,
	},
	{
		jobPosition: `Sr. Exe. Designer`,
		jobType: `Lotto / Lee Copper`,
		jobDuration: `2006 To Running`,
		timeDuraton: `Full Time`,
		compnayName: 'Google LLC',
		jobDescription: `Utilizing my best creative skills and experiences through my dedication and heard working to develop a unique product of organization to become a Creative Skillful Designer on 3D Fashion Graphics, Embroidery, and (CLO/ShoeMaster) 3D CAD Designing.`,
	},
	{
		jobPosition: `Sr. Exe. Designer`,
		jobType: `Lotto / Lee Copper`,
		jobDuration: `2006 To Running`,
		timeDuraton: `Full Time`,
		compnayName: 'Google LLC',
		jobDescription: `Utilizing my best creative skills and experiences through my dedication and heard working to develop a unique product of organization to become a Creative Skillful Designer on 3D Fashion Graphics, Embroidery, and (CLO/ShoeMaster) 3D CAD Designing.`,
	},
];

const educatonContent = [
	{
		passingYear: '2010-2012',
		degreeTitle: 'Higher National Diploma (HND)',
		instituteName: 'Santa Mariam University',
	},
	{
		passingYear: '2008-2010',
		degreeTitle: 'Higher Secondary Certificate (HSC)',
		instituteName: 'Barisal City College',
	},
	{
		passingYear: '2006-2008',
		degreeTitle: 'Secondary School Certificate (SSC)',
		instituteName: 'Muslim Akand Secondary Udaypur School',
	},
	{
		passingYear: '20-06-21/17-07-21',
		degreeTitle: 'Pattern making, Grading & Cad-Cam (Footwear)',
		instituteName: 'Skill for Employment Investment Program (SEIP)',
	},
	{
		passingYear: '2006-2008',
		degreeTitle: 'Secondary School Certificate (SSC)',
		instituteName: 'Muslim Akand Secondary Udaypur School',
	},
];

const whyContents = [
	{
		id: 1,
		title: 'Affordable',
		description:
			'Focusing on our core audience we are offering a premium quality experience for any factory, buying house or client by providing them with once in a lifetime experiences along with the best affordability, standard quality design and costing',
	},
	{
		id: 2,
		title: 'Versatile',
		description:
			'We have our hands on TREND FORECAST, VIRTUAL DESIGN, TECH PACK, GRAPHIC DESIGN. Whether complicated pattern pieces or countless layers, we concentrate on every complexed detail in order to reach client’s needs.',
	},
	{
		id: 3,
		title: 'Time Saving',
		description:
			"We know the value of our clients' time and make sure we're using it efficiently because efficiency leads to more productivity and profit. Valuing clients' time is the most important thing a company can do to provide good service.",
	},
	{
		id: 4,
		title: 'Reliable',
		description:
			"We are oriented towards serving the client's needs and measure customer satisfaction levels in order to determine the success of our company. We believe going the extra mile and showing passion for the client builds loyalty, trust and a longer customer relationship. The best way to deliver amazing service is to listen, build trust and be responsive to customer needs",
	},
	{
		id: 5,
		title: 'Responsive',
		description:
			'We put the needs and requirements of a customer ahead of anything and everything else having a 24/7 customer service to listen to the customer. We try to understand their questions, needs, and concerns to best service to them. We make sure that our customers get easy access to each and every single one of our products and services at all times.',
	},
	{
		id: 6,
		title: 'Sustainable',
		description:
			'Sustainability helps to become more efficient, improve brand value and reputation, provide a platform for innovation, help attract and retain staff, achieve better growth, cut costs and strengthen customer relations. It is becoming a way of life. Following that we provide digital service, material saving with no extra utility bill. Cost reduction and customer satisfaction are our first priority.',
	},
];

const Resume = () => {
	return (
		<>
			<section id='resume' className='section'>
				<div className='container'>
					<div className='title'>
						<h3>Education & Skills</h3>{' '}
					</div>

					<div className='row align-items-center'>
						<div
							className='col-lg-4 m-15px-tb'
							data-aos='fade-up'
							data-aos-duration='1200'
						>
							<ul className='aducation-box'>
								{educatonContent.map((val, i) => (
									<li key={i}>
										<span>{val.passingYear}</span>
										<h6>{val.degreeTitle} </h6>
										<p>{val.instituteName}</p>{' '}
									</li>
								))}
							</ul>
						</div>
						{/* End .col */}

						<div
							className='col-lg-7 ml-auto m-15px-tb'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-delay='200'
						>
							<Skills />
						</div>
						{/* End .col */}
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
						<h3>Experience.</h3>
					</div>
					{/* End title */}
					<div className='resume-box'>
						{resumeContent.map((val, i) => (
							<div
								className='resume-row'
								key={i}
								data-aos='fade-up'
								data-aos-duration='1200'
								data-aos-delay={val.delayAnimation}
							>
								<div className='row'>
									<div className='col-md-4 col-xl-3'>
										<div className='rb-left'>
											<h6>{val.jobPosition}</h6>
											<label>{val.jobType}</label>
											<p>{val.jobDuration}</p>
											<div className='rb-time'>{val.timeDuraton}</div>
										</div>
									</div>
									<div className='col-md-8 col-xl-9'>
										<div className='rb-right'>
											<div className='br_line'></div>
											{/* <h6>{val.compnayName}</h6> */}
											<p className='text-white'>{val.jobDescription}</p>
										</div>
									</div>
								</div>
							</div>
						))}
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

					{/* Why Kashriff */}

					<div className='title text-center'>
						<h3>Why Kashriff.</h3>
					</div>

					<div className='why-box '>
						{whyContents.map((val, i) => (
							<div
								className='item'
								key={i}
								data-aos='fade-up'
								data-aos-duration='1200'
								data-aos-delay={val.delayAnimation}
							>
								<h2>{val.title}</h2>
								<p className='text-white'>{val.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;
