import Joi from 'joi';

const registerValidator = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } })
        .message('Incorrect email'),
    password: Joi.string()
        .min(4).message('min 4 symbols')
        .max(10).message('max 10 symbols'),

    confirmPassword: Joi.ref('password')
});

export default registerValidator;