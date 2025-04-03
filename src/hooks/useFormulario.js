import { useState } from "react";

const useFormulario = ( inicial ) => {
    const [formulario, setFormulario] = useState( inicial );
    const handleChange = (e) => { // Esta funcion se encarga de guardar todos los valores que tienen los capos de formulario en la variable de formulario 
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const reset = () => {
        setFormulario(inicial);
    }

    return [formulario, handleChange, reset];
}

export default useFormulario;