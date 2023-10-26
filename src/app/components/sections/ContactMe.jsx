"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SectionHeaderText from "./SectionHeaderText";
import FormControl from "../forms/FormControl";
import FormResponseMessage from "../forms/FormResponseMessage";

import { getSanitizeInput } from "@utils/utils";
import { isValidEmail } from "@utils/utils";

const ContactMe = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [emailInput, setEmailInput] = useState("");
	const [subjectInput, setSubjectInput] = useState("");
	const [messageInput, setMessageInput] = useState("");

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const displayResponseMessage = (status) => {
		if (status === "success") {
			setShowSuccessMessage(true);
			setShowErrorMessage(false);
		} else {
			setShowSuccessMessage(false);
			setShowErrorMessage(true);
		}
	};

	const socialMedias = [
		{
			icon: "/images/linkedin-icon.svg",
			altText: "Icon of LinkedIn",
			link: "https://www.linkedin.com/in/mark-wong-se/",
		},
		{
			icon: "/images/github-icon.svg",
			altText: "Icon of GitHub",
			link: "https://github.com/mark62005",
		},
	];

	const handleEmailInputChange = (e) => {
		setEmailInput(e.target.value.trim());
	};
	const handleSubjectInputChange = (e) => {
		setSubjectInput(e.target.value.trim());
	};
	const handleMessageInputChange = (e) => {
		setMessageInput(e.target.value.trim());
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const sanitizedEmailInput = getSanitizeInput(emailInput);
		const sanitizedSubjectInput = getSanitizeInput(subjectInput);
		const sanitizedMessageInput = getSanitizeInput(messageInput);

		try {
			const res = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: sanitizedEmailInput,
					subject: sanitizedSubjectInput,
					message: sanitizedMessageInput,
				}),
			});

			// Handle unexpected errors
			if (res.status != 200 || res.statusCode) {
				setErrorMessage(
					`Error ${res.status}: ${res.statusText}. Please try again.`
				);
				displayResponseMessage("error");
				return;
			}

			displayResponseMessage("success");

			// Reset form inputs
			setEmailInput("");
			setSubjectInput("");
			setMessageInput("");
		} catch (err) {
			setErrorMessage(`Error ${res.status}: ${res.statusText}.`);
			displayResponseMessage("error");
		} finally {
			setIsLoading(false);
		}
	};

	const validateForm = () => {
		return isValidEmail(emailInput) || subjectInput != "" || messageInput != "";
	};

	return (
		<section
			className="grid grid-cols-1 lg:grid-cols-2 items-center py-8 px-4"
			id="contact"
		>
			<div>
				<SectionHeaderText text="Contact Me" />
				<p>Feel free to connect with me!</p>
				{/* Social Media Buttons */}
				<div className="flex justify-start items-center gap-4 py-4">
					{socialMedias.map((socialMedia, index) => (
						<Link
							href={socialMedia.link}
							key={index}
						>
							<Image
								src={socialMedia.icon}
								alt={socialMedia.altText}
								width={50}
								height={50}
								loading="lazy"
							/>
						</Link>
					))}
				</div>
			</div>
			{showSuccessMessage ? (
				<FormResponseMessage
					variant="success"
					message="Thank you for reaching out. I appreciate your interest in my work. Will get back to you soon!"
				/>
			) : (
				<form
					className="space-y-4 mt-4 flex flex-col gap-4"
					onSubmit={handleSubmit}
					noValidate
				>
					<FormControl
						variant={"email"}
						title={"Your Email"}
						dataInput={subjectInput}
						handleInputChange={handleEmailInputChange}
					/>
					<FormControl
						variant={"subject"}
						title={"Subject"}
						dataInput={subjectInput}
						handleInputChange={handleSubjectInputChange}
					/>
					<FormControl
						variant={"message"}
						title={"Message"}
						dataInput={subjectInput}
						handleInputChange={handleMessageInputChange}
					/>

					{/* Error Message */}
					{showErrorMessage && (
						<FormResponseMessage
							variant="error"
							message={errorMessage}
						/>
					)}

					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:opacity-50"
						disabled={!validateForm() || isLoading}
					>
						{isLoading ? "Submitting..." : "Submit"}
					</button>
				</form>
			)}
		</section>
	);
};
export default ContactMe;
