'use client';

import Image from 'next/image';

const CartModal = () => {
	const cartItems = true;
	return (
		<div className="w-max absolute p-4 rounded-md shadow-lg bg-white text-black top-12 right-0 flex flex-col gap-6 z-20">
			{!cartItems ? (
				<div>Cart is empty!</div>
			) : (
				<div>
					<h1 className="mb-4 text-xl">Shopping Cart</h1>

					{/* LIST */}
					<div className="flex gap-4 m-2">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							width={72}
							height={96}
							className="object-cover rounded-md"
						/>
						<div className="flex flex-col w-full justify-between">
							<div className="flex items-center justify-center gap-8">
								<h3 className="font-semibold ">Product Name</h3>
								<div className="p-1 bg-gray-50 rounded-sm">$49.99</div>
							</div>

							<div className="text-sm text-gray-500">Available</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-500">Qty: 2</span>
								<button className="text-blue-700">Remove</button>
							</div>
						</div>
					</div>
					<div className="flex gap-4 m-2">
						<Image
							src="https://images.pexels.com/photos/6543931/pexels-photo-6543931.jpeg"
							alt=""
							width={72}
							height={96}
							className="object-cover rounded-md"
						/>
						<div className="flex flex-col w-full justify-between">
							<div className="flex items-center justify-center gap-8">
								<h3 className="font-semibold ">Product Name</h3>
								<div className="p-1 bg-gray-50 rounded-sm">$49.99</div>
							</div>

							<div className="text-sm text-gray-500">Available</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-500">Qty: 2</span>
								<button className="text-blue-700">Remove</button>
							</div>
						</div>
					</div>

					{/* BOTTOM SECTION */}
					<div className="m-2">
						<div className="flex items-center justify-between font-semibold">
							<span className="">Subtotal</span>
							<span className="">$49.99</span>
						</div>
						<p className="text-gray-500 text-sm mt-2 mb-4">
							Shipping and taxes calculated at checkout.
						</p>
						<div className="flex items-center justify-between text-sm  gap-8">
							<button className="py-3 px-4 rounded-lg ring-1 ring-gray-500">
								View Cart
							</button>
							<button className="py-3 px-4 rounded-lg bg-black text-white">
								Checkout
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartModal;
