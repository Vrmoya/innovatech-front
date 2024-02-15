

const formValidator = (data) => {
    let errors = {};
  
    if (!data.model.trim()) {
      errors.model = '⚠Ingresa un nombre para el producto.';
   
    }  else if (data.model.length < 3 || data.model.length > 15) {
        errors.name = '⚠ El nombre debe tener entre 3 y 15 caracteres.';
      }

    
  
    if (!data.category.trim()) {
      errors.category = '⚠Ingresa una categoría para el producto';
     }

     else if (!/^[a-zA-Z\s]+$/.test(data.category)) {
        errors.category = '⚠ El nombre de la categoría del producto debe contener solo letras.';
   
   
    }
  


        //validación imágen
        if (!data.image.trim()) {
            errors.image = '⚠ Ingresa una imágen para el producto.';
         
          }
  
    return errors;
  };
  
  export default formValidator;