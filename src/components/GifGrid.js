import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //* llamando a un Custom Hook
    const { data: images, loading } = useFetchGifs(category);


  return (
      <>
        <h3 className='animate__animated animate__backInDown' > { category } </h3>
        {/* //* Se renderiza de acuerdo con el state del custom hook */}
        { loading  && <p className='animate__animated animate__flash'>Loading</p> }

        <div className='card-grid'>
            {
                //* desestructurando el objeto para obtener las propiedades especificas
                // images.map( ({ id, title }) => (
                images.map( ( img ) => (
                    <GifGridItem 
                        key={img.id} 
                        // img={img} 
                        { ...img } //* se envian todas las propiedades independientes con el operador spred sin un nombre de la propiedad del componente
                    />
                    // console.log(img.title);
                    // <li key={id} > {title} </li>
                ))

            }
        </div>
      </>
  )
}
