import * as yup from 'yup';

const loginSchema = yup
  .object({
    username: yup.string().required('Username is required').min(4, 'Username must be at least 4 characters').max(20, 'Username must not exceed 20 characters'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  })
  .required();

const registerSchema = yup
  .object({
    username: yup.string().required('Username is required').min(4, 'Username must be at least 4 characters').max(20, 'Username must not exceed 20 characters'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  })
  .required();

export { loginSchema, registerSchema };
