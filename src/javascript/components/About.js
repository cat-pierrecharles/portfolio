import '../../stylesheets/About.scss';

import React, { useEffect } from 'react';

import Tilt from 'react-tilt';
import profilePicture from '../../assets/profile_picture.jpg';
import sr from '../ScrollReveal';

export default function About() {
	useEffect(() => {
		sr.func.reveal('.about', sr.config);
	});

	return (
		<div className='about height mx-4'>
			<h1 className='heading pb-5'>A little bit about me</h1>
			<div className='row'>
				<div className='col-lg-5 col-md-12 col-sm-12'>
					<div className='text-center img-bg'>
						<Tilt className='Tilt mb-5' options={{ max: '25', transition: true, scale: 1 }}>
							<div className='Tilt-inner'>
								<a className='git' href='http://www.github.com/Pierre-Charles/' target='_blank'>
									<img className='profile-picture' src={profilePicture}></img>
								</a>
							</div>
						</Tilt>
					</div>
				</div>
				<div className='col-lg-7 col-md-12 col-sm-12 text-justify'>
					<p>
						I love working closely with people, coming up with many creative solutions and bringing ideas to life.
						Outside of my daily work, you can find me tinkering with IoT devices like Raspberry Pis/ESP32s, working on
						personal projects or learning and playing with new frameworks/libraries.
					</p>
					<p>
						My interest in web development started during my school days when I was making a website to showcase my
						photography work during my A-Levels. My passion for web development made me continue expanding my knowledge
						and led me to study Computer Science at the{' '}
						<a href='https://www.kent.ac.uk/computing' target='_blank'>
							School of Computing
						</a>{' '}
						at the University of Kent in Canterbury.
					</p>
					<p>
						Before starting my third year at university, I had the privilege to take a year out and work at a{' '}
						<a href='https://www.holidayextras.com/' target='_blank'>
							travel and tourism{' '}
						</a>
						company where I was able to learn a lot about modern web development. I learnt (and fell in love with) React
						and JavaScript and have been using both ever since!
					</p>
					<p>Here are a few of the technical skills I gained when working on projects:</p>
					<div>
						<ul className='skills pt-4'>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>TypeScript
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>JavaScript
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>Vue
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>Vuex
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>React
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>Express
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>Node.js
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>HTML
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>CSS
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>Git
							</li>
							<li>
								<i className='fas fa-feather-alt pr-2'></i>UNIX
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
