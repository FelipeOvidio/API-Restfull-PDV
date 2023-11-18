const validate = (joiSchema) => {
    return async (req, res, next) => {
        try {
            await joiSchema.validateAsync(req.body);

            next();
        } catch (error) {
            return res.status(400).json({ messagem: error.message });
        }
    };
};

module.exports = {
    validate,
};
