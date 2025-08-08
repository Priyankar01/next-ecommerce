'use client';

import Add from '@/components/Add';
import CustomizeProds from '@/components/CustomizeProds';
import ProductImages from '@/components/ProductImages';

function SinglePage() {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
				{/* IMAGE CONTAINER */}
				<div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
					<ProductImages />
				</div>
				{/* TEXT CONTAINER */}
				<div className="w-full lg:w-1/2 flex flex-col gap-6">
					<h1 className="text-4xl font-medium ">Product Name</h1>
					<p className="text-gray-500 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum,
						pariatur porro rerum suscipit voluptas cumque natus minima molestias
						iste nostrum quaerat eveniet nisi officia praesentium tempore
						necessitatibus nemo. Quaerat!
					</p>
					<div className="h-[2px] bg-gray-100" />
					<div className=" flex items-center gap-4">
						<h3 className="tex-xl text-gray-500 line-through">$59</h3>
						<h2 className=" font-medium text-2xl">$49.99</h2>
					</div>
					<div className="h-[2px] bg-gray-100" />
					<CustomizeProds />
					<Add />
					<div className="h-[2px] bg-gray-100" />
					<div className="text-sm">
						<h4 className="font-medium mb-4">Title</h4>
						<p className="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
							reiciendis, sequi hic animi libero expedita consequatur atque
							facilis dolorum blanditiis debitis iure. Itaque vero tempore
							repudiandae est facilis reprehenderit dolore!
						</p>
					</div>
					<div className="text-sm">
						<h4 className="font-medium mb-4">Title</h4>
						<p className="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
							reiciendis, sequi hic animi libero expedita consequatur atque
							facilis dolorum blanditiis debitis iure. Itaque vero tempore
							repudiandae est facilis reprehenderit dolore!
						</p>
					</div>
					<div className="text-sm">
						<h4 className="font-medium mb-4">Title</h4>
						<p className="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
							reiciendis, sequi hic animi libero expedita consequatur atque
							facilis dolorum blanditiis debitis iure. Itaque vero tempore
							repudiandae est facilis reprehenderit dolore!
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default SinglePage;
