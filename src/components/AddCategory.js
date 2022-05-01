 import React, { useState } from 'react'
 import PropTypes from 'prop-types';


 export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
   
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //* prevenir el comportamiento de refresco por defecto del formulario 
        e.preventDefault();

        //* eliminando los espacios en blanco antes y después
        if(inputValue.trim().length > 2){

            //* agregando el valor del input al setCategories a través del callback que llama los valores anteriores del arreglo
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue(''); //* Eliminando el valor del input agregado
        }
        

    }

    return (

        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    
   )
 
}

//* Función recibida en las props es requerida
AddCategory.protTypes = {
    setCategories: PropTypes.func.isRequired   
}
 