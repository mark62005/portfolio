import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req, res) => {
	const { email, subject, message } = await req.json();

	try {
		const res = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL,
			to: process.env.RESEND_TO_EMAIL,
			bcc: email,
			subject,
			reply_to: email,
			react: (
				<ContactFormEmail
					sender={email}
					message={message}
				/>
			),
		});

		if (res.statusCode != 200) {
			return NextResponse.json({ error: res.name }, { status: res.statusCode });
		}

		return NextResponse.json(res);
	} catch (err) {
		return NextResponse.json({ error: err.name }, { status: err.statusCode });
	}
};
