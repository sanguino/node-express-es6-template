import Joi from 'joi';

export const checkBody = {
  body: {
    data: Joi.string().required(),
  },
};

export const checkId = {
  params: {
    id: Joi.number()
      .positive()
      .required(),
  },
};
