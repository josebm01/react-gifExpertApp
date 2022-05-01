//! Se agrega en la carpeta helpers porque no se necesita renderiazar dentro del componente, solo realizar la petición

//* Realizando la petición get a https://developers.giphy.com/docs/api/endpoint#search
export const getGifs = async( category ) => {

    //* Evitando que los strings que reciba vayan con espacios y los reemplace por un símbolo permitido por medio de la función encodeURI 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=69cpob2Gdq5ZvcIjo80l7AXJhaWxuyRL`;    
    const resp = await fetch(url);
    const { data } = await resp.json();

    //* recorriendo toda la data del objeto para obtener las propiedades necesarias y no todo
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //* evitar recibir valores nulos 
        }
    });
    
    //* retornando el valor para asignar al setImages (devuelve una promesa)
    return gifs;

}
