import Image from 'next/image';
import Link from 'next/link';

export const ProductList = () => {
	return (
		<>
			<div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
				<Link
					href="/test"
					className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]">
					<div className="w-full relative h-80  ">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity duration-300"
						/>
						<Image
							src="https://images.pexels.com/photos/5325638/pexels-photo-5325638.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md"
						/>
					</div>
					<div className="flex justify-between">
						<span className="font-medium">Product Name</span>
						<span className="font-semibold">$49.99</span>
					</div>
					<div className="text-sm text-gray-500">My Description</div>
					<button className="rounded-2xl ring-1 text-primary ring-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
						Add to Cart
					</button>
				</Link>	<Link
					href="/test"
					className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]">
					<div className="w-full relative h-80  ">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity duration-300"
						/>
						<Image
							src="https://images.pexels.com/photos/5325638/pexels-photo-5325638.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md"
						/>
					</div>
					<div className="flex justify-between">
						<span className="font-medium">Product Name</span>
						<span className="font-semibold">$49.99</span>
					</div>
					<div className="text-sm text-gray-500">My Description</div>
					<button className="rounded-2xl ring-1 text-primary ring-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
						Add to Cart
					</button>
				</Link>	<Link
					href="/test"
					className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]">
					<div className="w-full relative h-80  ">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity duration-300"
						/>
						<Image
							src="https://images.pexels.com/photos/5325638/pexels-photo-5325638.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md"
						/>
					</div>
					<div className="flex justify-between">
						<span className="font-medium">Product Name</span>
						<span className="font-semibold">$49.99</span>
					</div>
					<div className="text-sm text-gray-500">My Description</div>
					<button className="rounded-2xl ring-1 text-primary ring-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
						Add to Cart
					</button>
				</Link>	<Link
					href="/test"
					className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]">
					<div className="w-full relative h-80  ">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity duration-300"
						/>
						<Image
							src="https://images.pexels.com/photos/5325638/pexels-photo-5325638.jpeg"
							alt=""
							fill
							sizes="25vw"
							className="object-cover absolute rounded-md"
						/>
					</div>
					<div className="flex justify-between">
						<span className="font-medium">Product Name</span>
						<span className="font-semibold">$49.99</span>
					</div>
					<div className="text-sm text-gray-500">My Description</div>
					<button className="rounded-2xl ring-1 text-primary ring-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
						Add to Cart
					</button>
				</Link>
			</div>
		</>
	);
};
