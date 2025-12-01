 import Joi from 'joi';

export interface SignUpRequestDto {
	username: string;
	name: string;
	email: string;
	password: string;
	
}

const signUpRequestDto = Joi.object({
	username: Joi.string()
		.required(),
	name: Joi.string()
		.required(),
	email: Joi.string()
		.email()
		.required(),
	password: Joi.string()
		.required(),
});

export default signUpRequestDto;
