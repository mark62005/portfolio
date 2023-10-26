import { sanitize } from "isomorphic-dompurify";
import { emailRegex } from "./regex";

export const getSanitizeInput = (input) => {
	return sanitize(input);
};

export const isValidEmail = (email) => {
	return emailRegex.test(email);
};
