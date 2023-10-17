import AboutMeSection from "@components/AboutMeSection";
import EducationSection from "@components/EducationSection";
import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import SkillsSection from "@components/SkillsSection";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center bg-black">
			<Header />
			<main className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutMeSection />
				<SkillsSection />
				<EducationSection />
			</main>
		</div>
	);
}
