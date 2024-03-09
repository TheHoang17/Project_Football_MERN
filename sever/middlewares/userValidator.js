const { check, validationResult    } =  require('express-validator');

exports.userValidationResult = (req, res, next) => {
  const result = validationResult(req)
  if(!result.isEmpty()){
    const error = result.array()
    return res.status(422).json({succes: false , error: error})
  }
  next()
}
exports.userValidator = [
  check('firstname')
    .trim()
    .not().isEmpty().withMessage('First name is required!')
    .isLength({ min:3, max:20 }).withMessage('First name must be 3 to 20 characters long!'),

  check('lastname')
    .trim()
    .not().isEmpty().withMessage('Last name is required!')
    .isLength({ min:3, max:20 }).withMessage('Last name must be 3 to 20 characters long!'),

  check('email')
    .trim()
    .not().isEmpty().withMessage('Email is required!')
    .isEmail().withMessage('Please provide a valid email!'),

  check('password')
    .trim()
    .not().isEmpty().withMessage('Password is required!')
    .isLength({ min:7 }).withMessage('Password must be at least 7 characters long!')
];