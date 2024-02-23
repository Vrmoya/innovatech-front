// const loginValidator = (data) => {
//     let errors = {};
    
//     //validaciones campo usuario
//     if (!data.user.trim()) {
//         errors.u1 = '⚠ Complete the field with a User name';
     
//       }  else if (data.user.length < 3 || data.user.length > 25) {
//           errors.u2 = '⚠ try between 3 and 15 characters';
//         }

//         //validaciones campo e-mail

//         if(!data.email.trim()){
//             errors.e1= '⚠ Complete the field with a valid E-mail';
//         }
//         if(!data.email.includes('@')){
//             errors.e2= 'Its not a valid email.'
//           }
//           if (!data.email.length>35){
//             errors.e3= 'Try between 36 characteres.'
//           }

//           if(!/\d/.test(data.password)){
//             errors.p1= 'Al menos un número.'
//           }
        
//           if(data.password.length < 6 || data.password.length > 10 ) {
//              errors.p2= 'Debe tener más de 6 y menos de diez caracteres.'
//           }







//         return errors;
//     };
    
//     export default loginValidator;



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


      if (!/\d/.test(data.password)) {
        errors.p1 = '⚠ Debe contener al menos un número';
      } else if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = '⚠ Debe tener entre 6 y 10 caracteres';
      }

    return errors;
};
    
export default loginValidator;