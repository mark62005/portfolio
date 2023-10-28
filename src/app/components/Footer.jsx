const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<p className="text-sm uppercase text-gray-400">
				All Rights Reserved by Ka Ho Wong | Copyright © {year}
			</p>
		</footer>
	);
};
export default Footer;
