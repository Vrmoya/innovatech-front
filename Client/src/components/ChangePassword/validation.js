// const validator = (input) => {
//     const errors = {};
  
   
//     if (!input.password) {
//       errors.password = 'Password is required';
//     } else {
      
//       if (!/\d/.test(input.password)) {
//         errors.password = "⚠ It must contain at least one number.";
//       } else if (input.password.length < 6 || input.password.length > 10) {
//         errors.password = '⚠ Try between 6 and 10 characters';
//       }
//     }


//     if (!input.confirmPassword) {
//       errors.confirmPassword = 'Password is required';
//     } else {
      
//       if (!/\d/.test(input.confirmPassword)) {
//         errors.confirmPassword = "⚠ It must contain at least one number.";
//       } else if (input.confirmPassword.length < 6 || input.confirmPassword.length > 10) {
//         errors.confirmPassword = '⚠ Try between 6 and 10 characters';
//       }
//     }
  
//     return errors;
//   };
  
//   export default validator;


const validator = (input) => {
  const errors = {};

  if (!input.password || typeof input.password !== 'string') {
    errors.password = 'Password is required';
  } else {
    const trimmedPassword = input.password.trim();
    if (!/\d/.test(trimmedPassword)) {
      errors.password = "⚠ It must contain at least one number.";
    } else if (!/[a-zA-Z]/.test(trimmedPassword)) {
      errors.password = "⚠ It must contain at least one letter.";
    } else if (trimmedPassword.length < 6 || trimmedPassword.length > 10) {
      errors.password = '⚠ Try between 6 and 10 characters';
    }
  }

  if (!input.confirmPassword || typeof input.confirmPassword !== 'string') {
    errors.confirmPassword = 'Password is required';
  } else {
    const trimmedConfirmPassword = input.confirmPassword.trim();
    if (!/\d/.test(trimmedConfirmPassword)) {
      errors.confirmPassword = "⚠ It must contain at least one number.";
    } else if (!/[a-zA-Z]/.test(trimmedConfirmPassword)) {
      errors.confirmPassword = "⚠ It must contain at least one letter.";
    } else if (trimmedConfirmPassword.length < 6 || trimmedConfirmPassword.length > 10) {
      errors.confirmPassword = '⚠ Try between 6 and 10 characters';
    }
  }

  return errors;
};

export default validator;

