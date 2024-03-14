
const validator = (input) => {
  const errors = {};

  // Verifica si el campo de correo electrónico está vacío
  if (!input.email) {
    errors.email = 'Email is required';
  } else {
    // Verifica si el formato del correo electrónico es válido
    if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Invalid email address';
    }
  }

  return errors;
};

export default validator;