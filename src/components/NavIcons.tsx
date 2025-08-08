'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Divide } from 'lucide-react';
import CartModal from './CartModal';

const NavIcons = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const router = useRouter();

	const isLoggedIn = false; // Replace with actual authentication logic
	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push('/login');
		}
		setIsProfileOpen((prev) => !prev);
	};
	return (
		<div className="flex items-center gap-4 xl:gap-6 relative">
			<Image
				src="/profile.png"
				alt=""
				width={22}
				height={22}
				className="cursor-pointer"
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className="absolute left-0 top-12 bg-white shadow-lg rounded-md p-4 text-sm z-20">
					<Link href="/" className="">
						Profile
					</Link>
					<div className="mt-2 cursor-pointer">Logout</div>
				</div>
			)}
			<Image
				src="/notification.png"
				alt=""
				width={22}
				height={22}
				className="cursor-pointer"
			/>
			<div
				className="relative cursor-pointer"
				onClick={() => setIsCartOpen((prev) => !prev)}>
				<Image src="/cart.png" alt="" width={22} height={22} />
				<div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm items-center justify-center flex">
					2
				</div>
				{isCartOpen && <CartModal />}
			</div>
		</div>
	);
};

export default NavIcons;
