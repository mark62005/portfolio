import Header from "@components/Header";
import Hero from "@components/sections/Hero";
import AboutMe from "@components/sections/AboutMe";
import Skills from "@components/sections/Skills";
import Education from "@components/sections/Education";
import ContactMe from "@components/sections/ContactMe";
import Footer from "@components/Footer";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center bg-black">
			<Header />
			<main className="container mt-24 mx-auto px-12 py-4">
				<Hero />
				<AboutMe />
				<Skills />
				<Education />
				<ContactMe />
			</main>
			<Footer />
		</div>
	);
}
