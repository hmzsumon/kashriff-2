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
				</div>
			</section>
		</>
	);
};

export default Resume;
