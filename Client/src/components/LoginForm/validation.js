

const loginValidator = (data) => {
    let errors = {};
    
    //validaciones campo usuario
    if (!data.user.trim()) {
        errors.u1 = '⚠ Complete the field with a User name';
     
    }  else if (data.user.length < 3 || data.user.length > 25) {
        errors.u2 = '⚠ try between 3 and 15 characters';
    }

    //validaciones campo e-mail

    if (!data.email.trim()) {
        errors.e1 = '⚠ Complete the field email';
      } else if (!data.email.includes('@') || !data.email.includes('.')) {
        errors.e2 = '⚠ It is not a valid email';
      } else if (data.email.length > 35) {
        errors.e3 = '⚠ try between 1 and 35 caracteres';
      }

// validaciones campo contraseña
      if (!/\d/.test(data.password)) {
        errors.p1 = "⚠ It must contain at least one number.";
      } else if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = '⚠ Try between 6 and 10 characters';
      }

    return errors;
};
    
export default loginValidator;