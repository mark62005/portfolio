"use client";

const FormControl = ({ variant, title, handleInputChange }) => {
	return variant ? (
		<label
			htmlFor={variant}
			className="text-sm font-medium leading-6"
		>
			<span>{title}</span>
			<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
				{/* Email */}
				{variant === "email" && (
					<>
						{/* Form Input */}
						<input
							type={variant}
							name={variant}
							id={variant}
							className="flex-1 border-0 bg-transparent py-1.5 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 peer"
							placeholder="Your Email"
							required
							pattern={`^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`}
							onChange={handleInputChange}
						/>
						{/* Invalid Message */}
						<p className="mt-2 hidden text-base text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
							Please enter a valid email address
						</p>
					</>
				)}

				{/* Subject */}
				{variant === "subject" && (
					<>
						{/* Form Input */}
						<input
							type="text"
							name={variant}
							id={variant}
							className="flex-1 border-0 bg-transparent py-1.5 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 peer"
							placeholder="Subject"
							required
							onChange={handleInputChange}
						/>
						{/* Invalid Message */}
						<span></span>
					</>
				)}

				{/* Message */}
				{variant === "message" && (
					<>
						{/* Form Input */}
						<textarea
							id={variant}
							name={variant}
							rows={3}
							className="w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black peer"
							defaultValue={""}
							placeholder="Leave me a message..."
							required
							onChange={handleInputChange}
						/>
						{/* Invalid Message */}
						<span></span>
					</>
				)}
			</div>
		</label>
	) : null;
};
export default FormControl;
