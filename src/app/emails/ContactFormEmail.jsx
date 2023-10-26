import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
	Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const ContactFormEmail = ({ sender, message }) => {
	return (
		<Html>
			<Head />
			<Preview>{message}</Preview>
			<Tailwind>
				<Body className="text-black">
					<Container>
						<Section className="m-8">
							<Heading className="text-2xl">
								You received the following message from{" "}
								<Link href={`${sender}`}>{sender}</Link> on{" "}
								<Link href="https://www.wongkaho.com">
									Your Portfolio Website
								</Link>
								.
							</Heading>
							<Text className="text-base">{message}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
export default ContactFormEmail;
