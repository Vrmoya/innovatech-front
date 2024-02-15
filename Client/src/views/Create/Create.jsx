import style from './Create.module.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import formValidator from './validation';



const Create = () => {

//estado local para el select de imágenes
    const [selectedImage, setSelectedImage] = useState(null);
//estado local para el manejo de errores
    const [errors, setErrors] = useState ({})

//guardo el form en un estado local
    const [input, setInput] = useState ({
        category: "",
        model: "",
        price: 0,
        description: "",
        image: "", //será un "string" que corresponde a una URL de Cloudinary



    });

// Handler que maneja el change de los input "text-type"
 function handleChange (e){
    setErrors(formValidator({...input, [e.target.name]: e.target.value}))
    setInput ({
        ...input,
        [e.target.name]: e.target.value
    })
    console.log (input)

 }
    // Manejar cambios en el campo "price" (el back espera un datatype FLOAT)
const handlePriceChange = (e) => {
    const value = e.target.value;
    const fieldErrors = formValidator({ ...input, price: value });

     // Actualizar el estado de los errores
     setErrors({ ...errors, ...fieldErrors });
    setInput({
        ...input,
        price: parseFloat(value)
    });
};

//Manejo del select de  la propiedad "category"
const handleSelect = (e) =>{
    const value= e.target.value;
     // Validar el campo de selección utilizando el validador
     const fieldErrors = formValidator({ ...input, category: value });

     // Actualizar el estado de los errores
     setErrors({ ...errors, ...fieldErrors });
 
    setInput ({
        ...input,
        category: value,
})

}

//Manejo del select Image
const handleSelectImage = (e)=>{
    const file = e.target.files[0];
    setSelectedImage(file);
    setInput({ ...input, image: file }); // Guarda el archivo en el estado
}

//Manejo del Submit Form
const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validar el formulario
    const formErrors = formValidator(input);

    if (Object.keys(formErrors).length === 0) {
        // Si no hay errores, enviar el formulario al backend
        console.log("Enviando formulario:", input);

        // Realizar la llamada al backend para enviar los datos utilizando fetch o axios

        // Una vez que los datos se han enviado exitosamente mostrar alert
        alert("¡Producto agregado con éxito!");

        // Luego, reiniciar form
        setInput({
            category: "",
            model: "",
            price: 0,
            description: "",
            image: ""
        });
    } else {
        // Si hay errores, mostrarlos al usuario
        console.log("Formulario no enviado debido a errores:", formErrors);
        alert("Corrija los errores antes de enviar el formulario.");
    }
};

    return(
        <div className= {style.container}>
             
             <h1 className={style.titulo}> Add products to Innova Tech Stock </h1>
           
           <div className={style.formContainer}>
            <form >
                
                <div className={style.text}>Category</div>
                <div  className={style.option} >
                    <select
                    className={style.input}
                    onChange={(e)=>handleSelect(e)}
                    >
                <option disabled defaultValue>Select category</option>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
                <option value="headphones">Headphones</option>
                <option value="keyboards">Keyboards</option>
                
                <option value= "newCategory">New Category</option>
                    
                    </select>{errors.category && <p className={style.error}>{errors.category}</p>}
                </div>
                <hr />



                <div className={style.text}>Name Model Product</div>
                <div  className={style.option} >
                    <input 
                    onChange={handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.model}
                    name= "model"
                    
                    />{errors.model && <p className={style.error}>{errors.model}</p>}
                </div>

                <hr />


                <div className={style.text}>Price</div>
                <div  className={style.option} >
                    <input 
                    onChange={handlePriceChange}
                    className={style.input}
                    type="number" 
                    value= {input.price}
                    name= "price"
                    
                    />{errors.price && <p className={style.error}>{errors.price}</p>}
                </div>
                <hr />
                
                <div className={style.text}>Description of the item</div>
                <div  className={style.option} >
                    <input 
                    onChange= {handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.description}
                    name= "description"
                    
                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                </div>
<hr />
                <div className={style.text}>Update Image Product</div>
                
                <div  className={style.option} >
                    <input 
                    onChange= {handleSelectImage}
                    className={style.input}
                    type="file" 
                    // value= {input.image}
                    name= "image"
                
                />{errors.image && <p className={style.error}>{errors.image}</p>}
                {/* Visualizar la imagen seleccionada (opcional) */}
            {selectedImage && (
                <div>
                    <p>Imagen seleccionada:</p>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '200px' }} />
                </div>
            )}
                
                </div>
<hr />












            </form>

           




           </div>
           <button onClick={handleSubmitForm}>Enviar Form</button>



        </div>
    )
}

export default Create;