'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
	{
		id: 1,
		src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
	},
	{
		id: 2,
		src: 'https://images.pexels.com/photos/32802110/pexels-photo-32802110.jpeg',
	},
	{
		id: 3,
		src: 'https://images.pexels.com/photos/30492651/pexels-photo-30492651.jpeg',
	},
	{
		id: 4,
		src: 'https://images.pexels.com/photos/25388754/pexels-photo-25388754.jpeg',
	},
];

const ProductImages = () => {
	const [index, setIndex] = useState(0);
	return (
		<>
			<div className="">
				<div className="h-[500px] relative">
					<Image
						src={images[index].src}
						alt="Product Image"
						sizes="30vw"
						fill
						className="object-cover rounded-md "
					/>
				</div>
				<div className="flex gap-4 mt-8 justify-between">
					{images.map((image, i) => (
						<div
							className="w-1/4 h-32 mt-8 gap-4 relative hover:cursor-pointer"
							key={image.id}
							onClick={() => setIndex(i)}>
							<Image
								src={image.src}
								alt="Product Image"
								sizes="30vw"
								fill
								className="object-cover rounded-md"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ProductImages;
