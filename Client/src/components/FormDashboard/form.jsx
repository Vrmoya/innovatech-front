<div className={style.container}>
            <div className={style.formContainer}>
                <form onSubmit={(e) => handleSubmitForm(e)}>
                    <div className={style.text}>Category</div>
                    <div className={style.option} >
                        <select className={style.input} onChange={(e) => handleChangeCategory(e)}>
                            <option value="">Select category</option>
                            <option value="laptop">Laptop</option>
                            <option value="smartphone">Smartphone</option>
                            <option value="tablet">Tablet</option>
                            <option value="headphone">Headphone</option>
                            <option value="keyboard">Keyboard</option>
                        </select>{errors.category && <p className={style.error}>{errors.category}</p>}
                    </div>

                    <div className={style.text}>Product Name</div>
                    <div className={style.option} >
                        <input
                            onChange={handleChange}
                            className={style.input}
                            type="text"
                            value={input.model}
                            name="model"
                        />{errors.model && <p className={style.error}>{errors.model}</p>}
                    </div>

                    <div className={style.text}>Price *</div>
                    <div className={style.option} >
                        <input
                            onChange={handlePriceChange}
                            className={style.input}
                            type="number"
                            value={input.price}
                            name="price"
                        />{errors.price && <p className={style.error}>{errors.price}</p>}
                    </div>

                    <div className={style.text}>Product Description</div>
                    <div className={style.option} >
                        <input
                            onChange={handleChange}
                            className={style.input}
                            type="text"
                            value={input.description}
                            name="description"
                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                    </div>

                    <div className={style.text}>Warranty</div>
                    <div className={style.option} >
                        <input
                            onChange={handleChange}
                            className={style.input}
                            type="text"
                            value={input.warranty}
                            name="warranty"
                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                    </div>

                    <div className={style.text}>{`Battery Life (in hour's)`}</div>
                    <div className={style.option} >
                        <input
                            onChange={handleChange}
                            className={style.input}
                            type="text"
                            value={input.batteryLife}
                            name="batteryLife"
                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                    </div>

                    <div >
                        <div className={style.text}>{`Weight (in grams)`}</div>
                        <div className={style.option} >
                            <input
                                onChange={handleChange}
                                className={style.input}
                                type="text"
                                value={input.weight}
                                name="weight"

                            />{errors.description && <p className={style.error}>{errors.description}</p>}
                        </div>
                    </div>

                    {/* Condicionales */}

                    {(category === "keyboard") &&
                        (
                            <div>

                                <div >
                                    <div className={style.text}>Lights</div>
                                    <div className={style.option} >
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.lights}
                                            name="lights"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>
                                </div>
                                <hr />
                                <div >

                                </div>
                                <div >
                                    <div className={style.text}>Media Keys</div>
                                    <div className={style.option} >
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.mediaKeys}
                                            name="mediaKeys"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>
                                </div>
                                <hr />
                                <div >

                                </div>

                                <div >
                                    <div className={style.text}>Wireless Range</div>
                                    <div className={style.option} >
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.wirelessRange}
                                            name="wirelessRange"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>
                                </div>
                                <hr />
                                <div >

                                </div>


                                <div >
                                    <div className={style.text}>Dimensions</div>
                                    <div className={style.option} >
                                        <input
                                            onChange={handleChange}
                                            className={style.input}
                                            type="text"
                                            value={input.dimensions}
                                            name="dimensions"

                                        />{errors.description && <p className={style.error}>{errors.description}</p>}
                                    </div>
                                </div>
                                <hr />

                                <div ></div>

                            </div>
                        )
                    }

                    {(category === "headphone") &&
                        (<div>


                            <div >
                                <div className={style.text}>Sound</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.sound}
                                        name="sound"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                            <div >

                            </div>

                            <div >
                                <div className={style.text}>Microphone</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.microphone}
                                        name="microphone"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                            <div ></div>

                        </div>)}

                    {(category === "headphone" || category === "keyboard") &&
                        (<div>

                            <div>
                                <div className={style.text}>Compatibility</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.compatibility}
                                        name="compatibility"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                            <div >
                                <div className={style.text}>Connectivity</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.connectivity}
                                        name="connectivity"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />

                            <div className={style.text}>Extra Functions</div>
                            <div className={style.option} >
                                <input
                                    onChange={handleChange}
                                    className={style.input}
                                    type="text"
                                    value={input.extrafunctions}
                                    name="extrafunctions"

                                />{errors.description && <p className={style.error}>{errors.description}</p>}
                            </div>

                            <hr />

                            <div >
                                <div className={style.text}>Waterproof</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.waterproof}
                                        name="waterproof"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>

                            <hr />

                            <div >
                                <div className={style.text}>Touch Control</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.touchControl}
                                        name="touchControl"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                        </div>

                        )}

                    {(category === "laptop" || category === "smartphone" || category === "tablet") &&
                        (<div>
                            <div className={style.text}>Screen</div>
                            <div className={style.option} >
                                <input
                                    onChange={handleChange}
                                    className={style.input}
                                    type="text"
                                    value={input.screen}
                                    name="screen"

                                />{errors.screen && <p className={style.error}>{errors.screen}</p>}
                            </div>

                            <hr />
                            <div >
                                <div className={style.text}>Ram</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.Ram}
                                        name="Ram"

                                    />{errors.ram && <p className={style.error}>{errors.ram}</p>}
                                </div>
                            </div>

                            <hr />

                            <div >
                                <div className={style.text}>Processor</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.processor}
                                        name="processor"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                            <div >
                                <div className={style.text}>Operating system</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.operatingSystem}
                                        name="operatingSystem"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>
                            <hr />
                            <div >
                                <div className={style.text}>Video Card</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.videoCard}
                                        name="videoCard"

                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>

                            <hr />

                            <div >
                                <div className={style.text}>Dimensions</div>
                                <div className={style.option} >
                                    <input
                                        onChange={handleChange}
                                        className={style.input}
                                        type="text"
                                        value={input.dimensions}
                                        name="dimensions"
                                    />{errors.description && <p className={style.error}>{errors.description}</p>}
                                </div>
                            </div>

                            <hr />

                        </div>
                        )
                    }

                    <div className={style.text}>Update Image Product</div>

                    <div className={style.option} >
                        <input
                            onChange={handleSelectImage}
                            className={style.input}
                            type="file"
                            accept="image/*"
                            // value= {input.image}
                            name="file"

                        />
                        {errors.image && <p className={style.error}>{errors.image}</p>}
                        {/* Visualizar la imagen seleccionada (opcional) */}

                    </div>

                    <div className={style.containerbutton}>
                        <button className={style.buttoncreate} type='submit'>Create Product</button>
                    </div>
                </form>
            </div>

            <div className={style.containerImages}>
                {selectedImages.map((image, index) => (
                    <div key={index} className={style.imageContainer}>
                        {/* <p>Imagen seleccionada {index + 1}:</p> */}
                        <img className={style.img} src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} />
                        <button className={style.button} onClick={() => handleDeleteImage(index)}>Eliminar</button>
                    </div>

                ))}
            </div>
        </div>