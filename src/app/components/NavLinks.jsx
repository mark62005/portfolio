import Link from "next/link";

const NavLinks = ({ href, title }) => {
	return (
		<Link
			href={href}
			className="p-3 text-lg hover:text-gray-400"
		>
			{title}
		</Link>
	);
};
export default NavLinks;
