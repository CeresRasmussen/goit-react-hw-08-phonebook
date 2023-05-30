import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import css from './Register.module.css';
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІєЄїЇ]+(([' -][a-zA-Zа-яА-ЯіІєЄїЇ])?[a-zA-Zа-яА-ЯіІєЄїЇ]*)*$/,
      {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Dick Thunder, Charles de Batz de Castelmore d'Artagnan",
      }
    )
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  // number: yup
  //   .string()
  //   .matches(
  //     /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  //     {
  //       message:
  //         'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  //     }
  //   )
  //   .required(
  //     'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  //   ),
  password: yup.string().required('Password is required'),
});

const SignUpPage = () => {
  const initialValue = { email: '', name: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (newUser, { resetForm }) => {
    console.log('newUser:', newUser);
    dispatch(register(newUser));
    resetForm();
  };

  return (
    <>
      <h2>Register to continue, please</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field placeholder="Name" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <Field placeholder="Email" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field placeholder="Password" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpPage;
