
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 452;
        const message = "Input Correctly"
        const extraDetails = error.errors[0].message;
        console.log(extraDetails);

    const error = {
        status,
        message,
        extraDetails
    };
        next(error)
        // res.status(400).json({ msg:message });
    }
};

module.exports = validate;
