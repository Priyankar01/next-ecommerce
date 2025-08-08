import React, { useState } from 'react';

const Add = () => {
	const [quantity, setQuantity] = useState(1);
	const Stock = 5;

	const quantityHandle = (action: 'increment' | 'decrement') => {
		if (action === 'increment' && quantity < Stock) {
			setQuantity((prev) => prev + 1);
		} else if (action === 'decrement' && quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	return (
		<>
			<div className="flex flex-col gap-4">
				<h3 className="font-medium">Choose a Quantity</h3>
				<div className="flex justify-between items-center">
					<div className="flex flex-row gap-4">
						<div className="w-32 px-4 py-2 rounded-3xl bg-gray-100 flex items-center gap-3 flex-row justify-between">
							<button
								className="text-xl"
								onClick={() => quantityHandle('decrement')}>
								-
							</button>
							{quantity}
							<button
								className="text-xl"
								onClick={() => quantityHandle('increment')}>
								+
							</button>
						</div>
						<p className="text-sm">
							Only <span className="text-orange-400">4 items</span> left!
							<br />
							Don&apos;t miss it
						</p>
					</div>
					<button className="w-36 py-2 px-4 text-primary rounded-3xl text-sm ring-1 ring-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-300 disabled:text-white disabled:ring-none">
						Add to Cart
					</button>
				</div>
			</div>
		</>
	);
};

export default Add;
function quantityHandle(action: any) {
	throw new Error('Function not implemented.');
}
