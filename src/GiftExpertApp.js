import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //* accediendo con el operador spred los registros anteriores del arreglo
    //     // setCategories ([...categories, 'Fullmental']);

    //     //* callback donde el primer argumento es el valor del estado anterior y regresa el nuevo estado con el estado actualizado  
    //     setCategories( cats => [...cats, 'Fullmental']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                        //* key es el índice único para renderizar
                        // <li key={ category }> { category } </li>
                    ))
                }
            </ol>

        </>
    ); 

}

export default GiftExpertApp;