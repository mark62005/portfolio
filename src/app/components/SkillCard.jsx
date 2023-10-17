const SkillCard = ({ title, skills }) => {
	return (
		<div className="flex flex-col border-2 rounded-md">
			<h3 className="text-2xl font-semibold text-center md:text-left py-3 px-5 border-b-2 border-double">
				{title}
			</h3>
			<ul className="self-center md:self-start py-3 px-5 list-disc list-inside">
				{skills.map((skill, index) => (
					<li
						key={index}
						className="text-base"
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};
export default SkillCard;
