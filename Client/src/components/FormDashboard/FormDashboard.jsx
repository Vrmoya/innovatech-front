import style from './FormDashboard.module.css'
import React, { useState } from 'react';
import formValidator from './validation';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios'

const Create = () => {

    //estado local para el select de imágenes renderiza la URL de Cloudinary
    const [urlImage, setUrlImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([])
    //estado local para el manejo de errores
    const [errors, setErrors] = useState({})
    //para despachar el post en la ruta
    const dispatch = useDispatch()

    //estado local para select category y renderizado condicional de propiedades
    const [category, setCategory] = useState('')

    //guardo el form en un estado local
    const [input, setInput] = useState({
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
    function handleChange(e) {
        setErrors(formValidator({ ...input, [e.target.name]: e.target.value }))
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)

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
    const handleSelectImage = async (event) => {
        const files = event.target.files;
        setUrlImage(files);
        setSelectedImages([...selectedImages, ...files]);
        const newImages = [...input.image];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            //enviar imágen a Cloudinary
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'innova_tech');

            try {
                const response = await axios.post('https://api.cloudinary.com/v1_1/dfhk5g0yv/image/upload', data)
                newImages.push(response.data.secure_url);

            } catch (error) {
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
    const handleSubmitForm = async (e) => {
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

    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>New Product</h1>
            </div>
            <form className={style.formContainer} onSubmit={(e) => handleSubmitForm(e)}>
                <div className={style.categories}>
                    <select className={style.select} onChange={(e) => handleChangeCategory(e)}>
                        <option className={style.option} value="">Select category</option>
                        <option className={style.option} value="laptop">Laptop</option>
                        <option className={style.option} value="smartphone">Smartphone</option>
                        <option className={style.option} value="tablet">Tablet</option>
                        <option className={style.option} value="headphone">Headphone</option>
                        <option className={style.option} value="keyboard">Keyboard</option>
                    </select>{errors.category && <label className={style.error}>{errors.category}</label>}
                </div>
                <div className={style.detailContainer}>
                    <div className={style.inputContainer}>
                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Product Name *</h3>
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.model}
                                name="model"
                            />
                            {errors.model && <p className={style.error}>{errors.model}</p>}
                        </div>

                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Product Price *</h3>
                            <input
                                onChange={handlePriceChange}
                                className={style.input}
                                type="number"
                                value={input.price}
                                name="price"
                            />
                            {errors.price && <p className={style.error}>{errors.price}</p>}
                        </div>

                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Product Description *</h3>
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.description}
                                name="description"
                            />{errors.description && <p className={style.error}>{errors.description}</p>}
                        </div>

                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Warranty</h3>
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.warranty}
                                name="warranty"
                            />{errors.description && <p className={style.error}>{errors.description}</p>}
                        </div>

                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Battery Life</h3>
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.batteryLife}
                                name="batteryLife"
                            />{errors.description && <p className={style.error}>{errors.description}</p>}
                        </div>

                        <div className={style.inputContent}>
                            <h3 className={style.detail}>Weight</h3>
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.weight}
                                name="weight"
                            />{errors.description && <p className={style.error}>{errors.description}</p>}
                        </div>

                        {(category === "keyboard") &&
                            (
                                <>
                                    <div className={style.inputContent}>
                                        <h3 className={style.detail}>Lights</h3>
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.lights}
                                            name="lights"
                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>

                                    <div className={style.inputContent}>
                                        <h3 className={style.detail}>Media Keys</h3>
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.mediaKeys}
                                            name="mediaKeys"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>

                                    <div className={style.inputContent}>
                                        <h3 className={style.detail}>Wireless Range</h3>
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.wirelessRange}
                                            name="wirelessRange"
                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>

                                    <div className={style.inputContent}>
                                        <h3 className={style.detail}>Dimensions</h3>
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.dimensions}
                                            name="dimensions"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>
                                </>
                            )
                        }


                        {(category === "headphone") &&
                            (<>
                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Sound</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.sound}
                                        name="sound"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Microphone</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.microphone}
                                        name="microphone"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </>
                            )
                        }

                        {(category === "headphone" || category === "keyboard") &&
                            (<>
                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Compatibility</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.compatibility}
                                        name="compatibility"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Connectivity</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.connectivity}
                                        name="connectivity"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Extra Functions</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.extrafunctions}
                                        name="extrafunctions"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Waterproof</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.waterproof}
                                        name="waterproof"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Touch Control</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.touchControl}
                                        name="touchControl"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </>
                            )}

                        {(category === "laptop" || category === "smartphone" || category === "tablet") &&
                            (<>
                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Screen</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.screen}
                                        name="screen"
                                    />{errors.screen && <p className={style.error}>{errors.screen}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Ram</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.Ram}
                                        name="Ram"

                                    />{errors.ram && <p className={style.error}>{errors.ram}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Processor</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.processor}
                                        name="processor"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Operating System</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.operatingSystem}
                                        name="operatingSystem"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Video Card</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.videoCard}
                                        name="videoCard"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>

                                <div className={style.inputContent}>
                                    <h3 className={style.detail}>Dimensions</h3>
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.dimensions}
                                        name="dimensions"
                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </>
                            )
                        }

                    </div>
                </div>
                <div className={style.imageSection}>
                    <div className={style.selectImg} >
                        <input
                            onChange={handleSelectImage}
                            className={style.inputSelect}
                            type="file"
                            accept="image/*"
                            // value= {input.image}
                            name="file"
                        />
                        {errors.image && <p className={style.error}>{errors.image}</p>}
                    </div>
                    <div className={style.containerImages}>
                        {selectedImages.map((image, index) => (
                            <div key={index} className={style.imageContainer}>
                                {/* <p>Imagen seleccionada {index + 1}:</p> */}
                                <img className={style.img} src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} />
                                <button className={style.buttonDelete} onClick={() => handleDeleteImage(index)}>X</button>
                            </div>

                        ))}
                    </div>
                    <div className={style.buttonContent}>
                        <button className={style.buttonCreate} type='submit'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create;