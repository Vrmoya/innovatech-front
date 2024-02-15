import formValidator from "./validation";
//Handler que maneja el change de los input "text-type"
// export function handleChange (e){
//     setErrors(formValidator({...input, [e.target.name]: e.target.value}))
//     setInput ({
//         ...input,
//         [e.target.name]: e.target.value
//     })
//     console.log (input)

//  }

export function handleChange(e, setErrors, setInput) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setErrors(prevErrors => ({
        ...prevErrors,
        [name]: formValidator({ ...prevErrors, [name]: value })[name]
    }));

    setInput(prevInput => ({
        ...prevInput,
        [name]: value
    }));

    console.log(input);
}