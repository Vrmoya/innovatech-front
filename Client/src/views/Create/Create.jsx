import style from './Create.module.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import formValidator from './validation';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import swal from 'sweetalert';


const Create = () => {

//estado local para el select de imágenes renderiza la URL de Cloudinary
    const [urlImage, setUrlImage] = useState(null);
    const [selectedImages, setSelectedImages]= useState ([])
//estado local para el manejo de errores
    const [errors, setErrors] = useState ({})
//para despachar el post en la ruta
    const dispatch = useDispatch()

//estado local para select category y renderizado condicional de propiedades
const [category, setCategory]= useState('')

//guardo el form en un estado local
    const [input, setInput] = useState ({
        category: "",
        categories: [], // Ajustamos el objeto input para incluir categories
        model: "",
        price: 0,
        description: "",
        warranty: "",
        batteryLife: "",
        image: [], //será un "array" que corresponde a una lista de URL de Cloudinary
        screen: null,
        Ram: null,
        operatingSystem: null,
        videoCard: null,
        compatibility: null,
        connectivity: null,
        extrafunctions: null,
        waterproof: null,
        touchControl: null,
        sound: null,
        microphone: null,
        lights: null,
        mediaKeys: null,
        wirelessRange: null,
        dimensions: null,
        weight: null,

    });




// Manejo del select de la propiedad "category"
const handleChangeCategory = (event) => {
    
    const value = event.target.value;
    setCategory(value); // Actualizamos el estado local category
    setInput({
        ...input,
        categories: [{ name: value }]
    });
};

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
    setSelectedImages([...selectedImages,...files]);
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


    // Función para eliminar una imagen seleccionada
    const handleDeleteImage = async (index) => {
        const newImages = [...input.image];
        const removedImage = newImages.splice(index, 1)[0]; // Eliminar la imagen del array
    
        // Eliminar la imagen de Cloudinary
        // try {
        //     await axios.delete(`https://api.cloudinary.com/v1_1/dfhk5g0yv/image/destroy/${removedImage.public_id}`);
        // } catch (error) {
        //     console.error('Error al eliminar la imagen de Cloudinary:', error);
        // }

        // Actualizar el estado de input con las imágenes restantes
        setInput({ ...input, image: newImages });

        // Actualizar el estado local de las imágenes seleccionadas
        setSelectedImages(selectedImages.filter((_, i) => i !== index));
    };

//Manejo del Submit Form
const handleSubmitForm = async(e) => {
    e.preventDefault();

    // Validar el formulario
    const formErrors = formValidator(input);

    if (Object.keys(formErrors).length === 0) {
        if (input.categories.length === 0) {
            // Si no hay categorías seleccionadas, muestra un error y no envíes el formulario
            alert("Seleccione una categoría antes de enviar el formulario.");
            return;
        }
        try {
            // Realizar la llamada al backend para enviar los datos utilizando axios
            const response = await axios.post('http://localhost:3001/products', input);
            
            // Una vez que los datos se han enviado exitosamente, mostrar una alerta
            // alert("¡Producto agregado con éxito!");
            swal("Success Created!", "Click in the OK button to continue!", "success");

            
            // Luego, reiniciar form
            setInput({
                category: "",
                categories: [], // Reiniciamos las categorías
                model: "",
                price: 0,
                description: "",
                image: [],
                screen: null,
                Ram: null,
                operatingSystem: null,
                videoCard: null,
                compatibility: null,
                connectivity: null,
                extrafunctions: null,
                waterproof: null,
                touchControl: null,
                sound: null,
                microphone: null,
                lights: null,
                mediaKeys: null,
                wirelessRange: null,
                dimensions: null,
                weight: null,
                
            });
        } catch (error) {
            // Si hay un error al enviar los datos, mostrar un mensaje de error
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
        }
    } else {
        // Si hay errores, mostrarlos al usuario
        console.log("Formulario no enviado debido a errores:", formErrors);
        // alert("Corrija los errores antes de enviar el formulario.");
        swal("Error", "Complete all fields and try again", "error");
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
                <option value="headphone">Headphone</option>
                <option value="keyboard">Keyboard</option>
                
                
                    
                    </select>{errors.category && <p className={style.error}>{errors.category}</p>}
                </div>
                <hr />



                <div className={style.text}>Name Model Product *</div>
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


                <div className={style.text}>Price *</div>
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
                
                <div className={style.text}>Description of the item *</div>
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

<div className={style.text}>{`Warranty (in month)`}</div>
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
<div className={style.text}>{`Battery Life (in hour's)`}</div>
                <div  className={style.option} >
                    <input 
                    onChange= {handleChange}
                    className={style.input}
                    type="text" 
                    value= {input.batteryLife}
                    name= "batteryLife"
                    
                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                </div>

                
<hr />

<div >
<div className={style.text}>{`Weight (in grams)`}</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.weight}
              name= "weight"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
       
<div ></div>

{(category==="keyboard")&&
(

<div>

<div >
<div className={style.text}>Lights</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.lights}
              name= "lights"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div >

</div>
<div >
<div className={style.text}>Media Keys</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.mediaKeys}
              name= "mediaKeys"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div >

</div>
    
<div >
<div className={style.text}>Wireless Range</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.wirelessRange}
              name= "wirelessRange"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div >

</div>


<div >
<div className={style.text}>Dimensions</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.dimensions}
              name= "dimensions"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
       
<div ></div>



</div>
    
)


}


{(category === "headphone")&& 
( <div>


<div >
<div className={style.text}>Sound</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.sound}
              name= "sound"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div >

</div>

<div >
<div className={style.text}>Microphone</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.microphone}
              name= "microphone"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div ></div>

</div>)}



{(category === "headphone" || category==="keyboard" )&& 
( <div>



<div >


<div className={style.text}>Compatibility</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.compatibility}
              name= "compatibility"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
<div >
<div className={style.text}>Connectivity</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.connectivity}
              name= "connectivity"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
        
    <div className={style.text}>Extra Functions</div>
              <div  className={style.option} >
                  <input 
                  onChange= {handleChange}
                  className={style.input}
                  type="text" 
                  value= {input.extrafunctions}
                  name= "extrafunctions"
                  
                  />{errors.description && <p className={style.error}>{errors.description}</p>}
              </div>
              
<hr />

<div >
<div className={style.text}>Waterproof</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.waterproof}
              name= "waterproof"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>

          <hr />

          <div >
<div className={style.text}>Touch Control</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.touchControl}
              name= "touchControl"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
          </div>
          

          )} 


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
              value= {input.Ram}
              name= "Ram"
              
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
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          <hr />
          <div >
<div className={style.text}>Operating system</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.operatingSystem}
              name= "operatingSystem"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
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
              value= {input.videoCard}
              name= "videoCard"
              
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          
          <hr />

          <div >
<div className={style.text}>Dimensions</div>
          <div  className={style.option} >
              <input 
              onChange= {handleChange}
              className={style.input}
              type="text" 
              value= {input.dimensions}
              name= "dimensions"
              />{errors.description && <p className={style.error}>{errors.description}</p>}
          </div>
          </div>
          
          <hr />
                
          </div>
          

)

}

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
               
                
                </div>










<div className={style.containerbutton}>
          <button className={style.buttoncreate} type='submit'
          >Create Product</button></div>


            </form>

            

           </div>
           

           <div className={style.containerImages}> 
                {selectedImages.map((image, index) => (
    <div key={index}className={style.imageContainer}>
        {/* <p>Imagen seleccionada {index + 1}:</p> */}
        <img className={style.img}src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`}  />
        <button className={style.button}onClick={() => handleDeleteImage(index)}>Eliminar</button>
    </div>
    
))} </div>

        </div>
    )
}

export default Create;