const Joi = require("joi");

module.exports = {
   postAuthValidation: (req, res, next) => {
    const schemaValid = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .optional(),
      password: Joi.string().required(),     
    });

    const validationResult = schemaValid.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({
        contentType: "application/json",
        ResponseBody: validationResult.error.details,
      });
    }
    next();
  },
};