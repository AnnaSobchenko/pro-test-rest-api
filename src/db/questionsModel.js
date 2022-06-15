const { Schema, model } = require("mongoose");
const Joi = require("joi");

const questionSchema = new Schema({
	question: {
		type: String,
		required: [true],
	},
	questionId: {
		type: String,
		required: [true],
		unique: true,
	},
	answers: {
		type: Object,
		default: [],
	},
	rightAnswer: {
		type: String,
	},
});

const postAuthValidation = (req, res, next) => {
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
};

const QuestionTechnical = model("questions-technicals", questionSchema);
const QuestionTheory = model("questions-theories", questionSchema);

const schemas = {
	postAuthValidation,
};

module.exports = {
	QuestionTechnical,
	QuestionTheory,
	schemas,
};
