import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<>
			<div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
				{/* TOP */}
				<div className="flex justify-between gap-24 flex-col md:flex-row">
					{/* LEFT */}
					<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
						<Link href="/">
							<div className="text-2xl tracking-wide">LOGO</div>
						</Link>
						<p className="w-full">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							debitis dignissimos harum ipsum neque molestias non tempore
							repellat vero facere.
						</p>
						<span className="font-semibold">test@email.com</span>
						<span className="font-semibold">+1 234 567 8900</span>
						<div className="flex gap-6">
							<Image
								src="/facebook.png"
								alt="Facebook"
								width={16}
								height={16}
							/>
							<Image
								src="/instagram.png"
								alt="Instagram"
								width={16}
								height={16}
							/>
							<Image src="/youtube.png" alt="Youtube" width={16} height={16} />
							<Image
								src="/pinterest.png"
								alt="Pinterest"
								width={16}
								height={16}
							/>
							<Image src="/x.png" alt="X" width={16} height={16} />
						</div>
					</div>
					{/* CENTER */}
					<div className="hidden lg:flex w-1/2 justify-between">
						<div className="flex flex-col justify-between">
							<h1 className="font-medium text-lg">Company</h1>
							<div className="flex flex-col gap-6">
								<Link href="/">About Us</Link>
								<Link href="/">Careers</Link>
								<Link href="/">Affliates</Link>
								<Link href="/">Blog</Link>
								<Link href="/">Contact Us</Link>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<h1 className="font-medium text-lg">SHOP</h1>
							<div className="flex flex-col gap-6">
								<Link href="/">New Arrivals</Link>
								<Link href="/">Accesories</Link>
								<Link href="/">Men</Link>
								<Link href="/">Woman</Link>
								<Link href="/">All Producst</Link>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<h1 className="font-medium text-lg">HELP</h1>
							<div className="flex flex-col gap-6">
								<Link href="/">Customer Service</Link>
								<Link href="/">My Account</Link>
								<Link href="/">Find a Store</Link>
								<Link href="/">Legal & Privacy</Link>
								<Link href="/">Gift Card</Link>
							</div>
						</div>
					</div>
					{/* RIGHT */}
					<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
						<h1 className="font-medium text-lg">Subscribe</h1>
						<p>
							Be the first to get the latest news about tends, promotions, and
							much more!
						</p>
						<div className="flex">
							<input
								type="text"
								placeholder="Email address"
								className="p-4 w-3/4"
							/>
							<button className="w-1/4 bg-primary text-white">Join</button>
						</div>
						<span className="font-semibold">Secure Payments</span>
						<div className="flex justify-between">
							<Image
								src="/discover.png"
								alt="Discover"
								width={40}
								height={20}
							/>
							<Image src="/skrill.png" alt="Skrill" width={40} height={20} />
							<Image src="/paypal.png" alt="Paypal" width={40} height={20} />
							<Image
								src="/mastercard.png"
								alt="Mastercard"
								width={40}
								height={20}
							/>
							<Image src="/visa.png" alt="Visa" width={40} height={20} />
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className="flex flex-col md:flex-row justify-between items-center text-sm gap-8 mt-16">
					<div>2025 | Essense Shop</div>
					<div className="flex flex-col md:flex-row gap-8">
						<div>
							<span className="text-gray-500 mr-4">Language:</span>
							<span className="font-medium">United States | English</span>
						</div>
						<div>
							<span className="text-gray-500 mr-4">Currency:</span>
							<span className="font-medium">$ USD</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
