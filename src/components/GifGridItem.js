import React from 'react'

//* se acceden a las propiedades específicas enviadas con el operador spred (...)
export const GifGridItem = ( { id, title, url } ) => {

    // console.log(id, title, url);     

  return (
    <div className='card animate__animated animate__backInDown'> 
        <img src={ url } alt={ title } />
        <p> { title } </p>    
     </div>
  )
}
