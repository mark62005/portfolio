import SectionHeaderText from "./SectionHeaderText";
import Image from "next/image";

const AboutMeSection = () => {
	return (
		<section className="py-8 px-4">
			<SectionHeaderText text="About Me" />
			<div className="grid grid-col-1 md:grid-cols-2 gap-8 justify-items-center items-center xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about me_desktop.jpg"
					alt="An about me picture of Mark Wong"
					width={250}
					height={250}
					loading="lazy"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<p className="text-base lg:text-lg text-justify">
						I am a passionate software engineer with skills in JavaScript, Java
						and Git. I am a quick learner and further expanding my knowledge and
						skills at Cornerstone College in Vancouver. I am a team player and
						excited to help companies achieves their goals in full stack web
						development and iOS development.
					</p>
				</div>
			</div>
		</section>
	);
};
export default AboutMeSection;
