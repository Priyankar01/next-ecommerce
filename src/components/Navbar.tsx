import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

function Navbar() {
	return (
		<div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
			{/* Mobile */}
			<div className="flex items-center justify-between h-full md:hidden">
				<Link href="/">
					<div className="text-2xl tracking-wide">LOGO</div>
				</Link>
				<Menu />
			</div>

			{/* Bigger Screens */}
			<div className="hidden md:flex items-center justify-between gap-8 h-full ">
				{/* LEFT */}
				<div className="w-1/3 xl:w-1/2 flex items-center gap-12">
					<Link href="/" className="flex items-center gap-3">
						<Image src="/logo.png" alt="Logo" width={20} height={20} />
						<div className="text-2xl tracking-wide">LOGO</div>
					</Link>

					<div className="hidden xl:flex gap-4">
						<Link href="/">Homepage</Link>
						<Link href="/">Shop</Link>
						<Link href="/">Deals</Link>
						<Link href="/">About</Link>
						<Link href="/">Contact</Link>
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-2/3 flex gap-4 xl:w-1/2">
					<SearchBar />
					<NavIcons />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
