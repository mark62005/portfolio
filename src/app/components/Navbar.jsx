"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const navLinks = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "#about",
		title: "About",
	},
	{
		href: "#contact",
		title: "Contact",
	},
];

const Navbar = () => {
	const [isNavbarOpened, setIsNavbarOpened] = useState(false);

	return (
		<div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-2 pl-5 pr-2 lg:pl-2">
			{/* Logo */}
			<Link
				href={"/"}
				className="flex items-center"
			>
				<Image
					src={"/images/logo.png"}
					alt="Logo of Mark Wong"
					width={50}
					height={50}
					priority="true"
				/>
			</Link>
			{/* Menu */}
			<nav className="flex items-center justify-between w-auto">
				<ul className="flex flex-row p-3 border-0 border-gray-100 space-x-4">
					{navLinks.map((link, index) => (
						<li key={index}>
							<NavLinks
								href={link.href}
								title={link.title}
							/>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;
