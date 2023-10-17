import SectionHeaderText from "./SectionHeaderText";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
	const skills = [
		{
			title: "Frontend",
			skills: ["HTML5", "CSS3", "JavaScript", "JS Testing", "Swift"],
		},
		{
			title: "Backend",
			skills: ["Java", "JUnit 5", "MySQL", "PostgreSQL", "MongoDB"],
		},
		{
			title: "Frameworks",
			skills: [
				"React.JS",
				"Next.JS",
				"Vite",
				"Spring Boot",
				"Express.JS",
				"Mongoose",
				"Swift UIKit",
			],
		},
		{
			title: "Other",
			skills: ["Git", "Docker", "Kubernetes", "AWS", "Microsoft Azure"],
		},
	];

	return (
		<section className="py-8 px-4">
			<SectionHeaderText text="Skills" />
			<div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
				{skills.map((s, index) => (
					<SkillCard
						title={s.title}
						skills={s.skills}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};
export default SkillsSection;
