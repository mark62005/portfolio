import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start">
					<h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						Hello, I&apos;m
						<br />
						Mark.
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Software Engineer
					</p>
					<div>
						{/* Contact Button */}
						<Link
							href="#contact"
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200"
						>
							Hire Me
						</Link>
						{/* Resume Button */}
						<Link
							href="#resume"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 mt-3"
						>
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download Resume
							</span>
						</Link>
					</div>
				</div>
				<div className="col-span-4 place-self-center mt-4 md:mt-0">
					<Image
						src="/images/hero_transparent.png"
						alt="hero image"
						width={180}
						height={200}
					/>
				</div>
			</div>
		</section>
	);
};
export default HeroSection;
