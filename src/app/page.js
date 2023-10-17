import AboutMeSection from "@components/AboutMeSection";
import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center bg-black">
			<Header />
			<main className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutMeSection />
			</main>
		</div>
	);
}
