import style from './Create.module.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import formValidator from './validation';
import axios from 'axios';
import {useDispatch} from 'react-redux';


const Create = () => {

//estado local para el select de imágenes renderiza la URL de Cloudinary
    const [urlImage, setUrlImage] = useState(null);
//estado local para el manejo de errores
    const [errors, setErrors] = useState ({})
//para despachar el post en la ruta
    const dispatch = useDispatch()
//estado local para select category y renderizado condicional de propiedades
const [category, setCategory]= useState('')

//guardo el form en un estado local
    const [input, setInput] = useState ({
        category: "",
        model: "",
        price: 0,
        description: "",
        warranty: "",
        battery_life: "",
        image: [], //será un "array" que corresponde a una lista de URL de Cloudinary
        screen: "",
        ram: "",
        operating_sistem: "",
        video_card: "",




    });


//Manejo del select de  la propiedad "category"
const handleChangeCategory = (e) =>{
    const value= e.target.value;
     // Validar el campo de selección utilizando el validador
     const fieldErrors = formValidator({ ...input, category: value });
     setCategory(value)

     // Actualizar el estado de los errores
     setErrors({ ...errors, ...fieldErrors });
 
    setInput ({
        ...input,
        category: value,
})

}

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



//Manejo del select Image
const handleSelectImage = async (event)=>{
    const files = event.target.files;
    setUrlImage(files);
const newImages= [...input.image];

for (let i=0; i<files.length;i++){
    const file = files [i];
    
//enviar imágen a Cloudinary
const data = new FormData();
data.append ('file', file);
data.append ('upload_preset', 'innova_tech');

try {
    const response= await axios.post('https://api.cloudinary.com/v1_1/dfhk5g0yv/image/upload', data)
newImages.push(response.data.secure_url);

}catch (error){
    console.error('Error al enviar la imagen a Cloudinary:', error);
}

}

 // Actualizar el estado con las nuevas imágenes
 setInput({ ...input, image: newImages });
}

//Manejo del Submit Form
const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validar el formulario
    const formErrors = formValidator(input);

    if (Object.keys(formErrors).length === 0) {
        // Si no hay errores, enviar el formulario al backend
        console.log("Enviando formulario:", input);
        dispatch(postForm(input))
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
            
            <form onSubmit={(e)=>handleSubmitForm(e)}>
                
                <div className={style.text}>Category</div>
                <div  className={style.option} >
                    <select
                    className={style.input}
                    onChange={(e)=>handleChangeCategory(e)}
                    >
                <option value="">Select category</option>
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

<div className={style.text}>Warranty</div>
                <div  className={style.option} >
                    <input 
                    onChange= {handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.warranty}
                    name= "warranty"
                    
                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                </div>
<hr />
<div className={style.text}>Battery Life</div>
                <div  className={style.option} >
                    <input 
                    onChange= {handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.battery_life}
                    name= "battery_life"
                    
                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                </div>
<hr />
                <div className={style.text}>Update Image Product</div>
                
                <div  className={style.option} >
                    <input 
                    onChange= {handleSelectImage}
                    className={style.input}
                    type="file" 
                    accept="image/*"
                    // value= {input.image}
                    name= "file"
                
                />
                 
                    {errors.image && <p className={style.error}>{errors.image}</p>}
                {/* Visualizar la imagen seleccionada (opcional) */}
            {/* {selectedImage && (
                <div>
                    <p>Imagen seleccionada:</p>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100px' }} />
                </div>
            )} */}
                
                </div>
<hr />

{(category === "laptop" || category==="smartphone" || category === "tablet" )&& 
(   <div>
      <div className={style.text}>Screen</div>
                <div  className={style.option} >
                    <input 
                    onChange= {handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.screen}
                    name= "screen"
                    
                    />{errors.screen && <p className={style.error}>{errors.screen}</p>}
                </div>
                
<hr />
<div >
<div className={style.text}>Ram</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.ram}
              name= "ram"
              
              />{errors.ram && <p className={style.error}>{errors.ram}</p>}
          </div>
          </div>

          <hr />

          <div >
<div className={style.text}>Processor</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.processor}
              name= "processor"
              
              />{errors.ram && <p className={style.error}>{errors.ram}</p>}
          </div>
          </div>
          <hr />
          <div >
<div className={style.text}>Operating sistem</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.operating_sistem}
              name= "operating_sistem"
              
              />{errors.ram && <p className={style.error}>{errors.ram}</p>}
          </div>
          </div>
<hr />
          <div >
<div className={style.text}>Video Card</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.video_card}
              name= "video_card"
              
              />{errors.ram && <p className={style.error}>{errors.ram}</p>}
          </div>
          </div>
          <hr />


          </div>
          

)

}









<div className={style.button}>
          <button type='submit'
          >Create Product</button></div>


            </form>

           </div>
           



        </div>
    )
}

export default Create;