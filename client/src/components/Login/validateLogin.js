export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (
    !/\^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password need to be more than 10 characters";
  }

  return errors;
}
