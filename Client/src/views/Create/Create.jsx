import style from './Create.module.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';




const Create = () => {

    //para manejo de redux
    // const dispatch= useDispatch()



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


     function handleChange (e){
        setInput ({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log (input)

     }
    // Manejar cambios en el campo "price" (ellos esperan un FLOAT)
const handlePriceChange = (e) => {
    const value = e.target.value;
    
    setInput({
        ...input,
        price: parseFloat(value)
    });
};




    return(
        <div className= {style.container}>
             <Link to= '/home'><button className={style.button}>Go Home!</button></Link>
             <h1 className={style.titulo}> Add products to Innova Tech Stock </h1>
           Form
           <div className={style.formContainer}>
            <form >
                
                <div className={style.text}>Category</div>
                <div  className={style.option} >
                    <select
                    className={style.input}
                    >
                <option disabled defaultValue>Select category</option>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
                <option value="headphones">Headphones</option>
                <option value="keyboards">Keyboards</option>
                
                <option value= "newCategory">New Category</option>
                    
                    </select>
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
                    
                    />
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
                    
                    />
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
                    
                    />
                </div>
<hr />
                <div className={style.text}>Update Image Product</div>
                
                <div  className={style.option} >
                    <input 
                    className={style.input}
                    type="file" 
                    // value= {input.model}
                    name= "image"
                    
                    />
                </div>
<hr />












            </form>






           </div>




        </div>
    )
}

export default Create;