'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
	{
		id: 1,
		title: 'Summer Sale Collections',
		description: 'Sale upto 50% off!',
		image:
			'https://images.pexels.com/photos/17243579/pexels-photo-17243579.jpeg',
		url: '/',
		bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
	},
	{
		id: 2,
		title: 'Winter Sale Collections',
		description: 'Sale upto 50% off!',
		image:
			'https://images.pexels.com/photos/19541260/pexels-photo-19541260.jpeg',
		url: '/',
		bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
	},
	{
		id: 3,
		title: 'Spring Sale Collections',
		description: 'Sale upto 50% off!',
		image:
			'https://images.pexels.com/photos/17243492/pexels-photo-17243492.jpeg',
		url: '/',
		bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
	},
];
const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentSlide((prev) => (prev + 1) % slides.length);
	// 	}, 3000); // Change slide every 3 seconds

	// 	// const interval = setInterval(() => {
	// 	// 	setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	// 	// }, 3000);

	// 	return () => clearInterval(interval); // Cleanup interval on unmount
	// }, []);
	return (
		<>
			<div className="h-[calc(100vh-80px)] overflow-hidden">
				<div
					className="w-max h-full flex transition-all ease-in-out duration-1000"
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
					{slides.map((slide) => (
						<>
							<div
								className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
								key={slide.id}>
								{/* TEXT CONTAINER */}
								<div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
									<h2 className="text-xl lg:text-3xl 2xl:text-5xl">
										{slide.description}
									</h2>
									<h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
										{slide.title}
									</h1>
									<Link href={slide.url} className="">
										<button className="rounde-md bg-black - text-white py-3 px-4">
											Shop Now
										</button>
									</Link>
								</div>
								{/* IMAGE CONTAINER */}
								<div className=" h-1/2 xl:w-1/2 xl:h-full relative">
									<Image
										src={slide.image}
										alt={slide.title}
										fill
										sizes="100%"
										className="object-cover"
									/>
								</div>
							</div>
						</>
					))}
				</div>
				<div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
					{slides.map((slide, index) => (
						<>
							<div
								className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
									currentSlide === index ? 'scale-150' : ''
								}`}
								key={slide.id}
								onClick={() => setCurrentSlide(index)}>
								{currentSlide === index && (
									<>
										<div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>
									</>
								)}
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default Slider;
