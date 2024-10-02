import '../../stylesheets/Home.scss';

import React, { useEffect } from 'react';

import cv from '../../assets/cv.pdf';
import sr from '../ScrollReveal';

export default function Home() {
	useEffect(() => {
		sr.func.reveal('.home', sr.config);
	});

	return (
		<div className='home height mx-4'>
			<h1 className='title'>Pierre Charles</h1>
			<h2 className='short-bio mr-5'>
				I build{' '}
				<span
					className='typer changing-span'
					id='main'
					data-words=' creative, innovative, stylish'
					data-delay='50'
				></span>{' '}
				<br />
				applications for the web
			</h2>
			<div>
				<p className='description mt-5'>
					I am a front-end developer from London specialising in designing, building and maintaining high-end web
					applications. I am currently working at{' '}
					<a href='https://hometrack.com/' target='_blank'>
						Hometrack (part of Houseful)
					</a>{' '}
					focusing on creating bespoke, user-friendly and accessible user interfaces to redefine the mortgage journey for lenders, brokers and borrowers.
				</p>
			</div>
			<a className='cv' href={cv} target='_blank'>
				View my CV
			</a>
		</div>
	);
}
