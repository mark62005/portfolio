const FormResponseMessage = ({ variant, message }) => {
	let variantClassName = "hidden";
	switch (variant) {
		case "success":
			variantClassName = `response-msg-success`;
			break;
		case "error":
			variantClassName = "response-msg-error";
			break;
		default:
			variantClassName = "hidden";
			break;
	}

	return (
		<p
			className={`${variantClassName} text-base border rounded-md p-3 font-medium`}
		>
			{message}
		</p>
	);
};
export default FormResponseMessage;
