const { check, validationResult } =  require('express-validator');

exports.userValidationResult = (req, res, next) => {
  const result = validationResult(req)
  if(!result.isEmpty()){
    const error = result.array()
    return res.status(422).json({succes: false , error: error})
  }
  next()
}
exports.userValidator = [
  check('username')
    .trim()
    .not().isEmpty().withMessage('Username is required!')
    .isLength({ min: 3, max: 20 }).withMessage('Username must be 3 to 20 characters long!'),
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
    .isLength({ min:7 }).withMessage('Password must be at least 7 characters long!'),

check('confirmPassword')

.custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Confirm password does not match password!');
  }
  return true;
}),

check('phone')
.trim()
.not().isEmpty().withMessage('Phone number is required!')
.isMobilePhone('any', { strictMode: false }).withMessage('Please provide a valid phone number!')
]