

const formValidator = (data) => {
    let errors = {};
  
    //errores en el campo "model"
    if (!data.model.trim()) {
      errors.model = '⚠Ingresa un nombre para el producto.';
   
    }  else if (data.model.length < 3 || data.model.length > 25) {
        errors.model = '⚠ El nombre debe tener entre 3 y 15 caracteres.';
      }

    
  //errores en el campo "category"
    // if (!data.category.trim()) {
    //   errors.category = '⚠Ingresa una categoría para el producto';
    //  }

     

    //errores en el campo "description"
  
    if (!data.description.trim()){
        errors.description = '⚠Complete the field';
    }






 //errores en el campo precio
 if (isNaN(data.price)) {
    errors.price = '⚠ Ingresa un precio válido para el producto.';
}
  
        
//errores en el campo imágen
        if (!data.image ===null) {
            errors.image = '⚠ Ingresa una imágen para el producto.';
         
          }
  

// errores en el campo screen
// if (!data.screen.trim()) {
//   errors.screen = '⚠ Completa el campo "screen".'
// }




    return errors;
  };
  
  export default formValidator;