export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.username = "Username address is required";
  } else if (
    !/\^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      values.username
    )
  ) {
    errors.username = "Username address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password need to be more than 6 characters";
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = "Password is required";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Passwords  do not match";
  }

  return errors;
}
