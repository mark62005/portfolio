import SectionHeaderText from "./SectionHeaderText";

const Education = () => {
	const educations = [
		{
			school: "Cornerstone International Community College of Canada",
			program: "Network & Systems Solution Specialist",
			type: "Co-op Diploma",
			duration: {
				start: "Sep 2023",
				end: "current",
			},
			subjects: ["AZ-104", "CCNA", "Comptia A+", "ITIL"],
		},
		{
			school: "Cornerstone International Community College of Canada",
			program: "Digital Marketing Specialist",
			type: "Co-op Diploma",
			duration: {
				start: "Jan 2021",
				end: "Dec 2021",
			},
			subjects: [
				"SEO & SEM",
				"Digital Marketing Strategy",
				"WordPress",
				"Web Analytics (Google Analytics 4)",
				"Campaign Management",
				"Design (Adobe Photoshop & Illustrator",
			],
		},
	];

	return (
		<section className="grid grid-cols-1">
			<SectionHeaderText text="Education" />
			{educations.map((education, index) => (
				<div
					className="flex flex-col"
					key={index}
				>
					<h3>{education.school}</h3>
					<h4>
						{education.program} <span>{education.type}</span>
					</h4>
					<ul>
						{education.subjects.map((subject, i) => (
							<li
								key={i}
								className="text-base list-disc list-inside"
							>
								{subject}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};
export default Education;
