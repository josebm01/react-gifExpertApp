//! Custom Hook

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });   

    useEffect(() => {
        //* Realizando la petición HTTP
        getGifs(category)
            .then( imgs => {

                 //* Cambiando la información al set
                 setState({
                     data: imgs,
                     loading: false
                 });

            });

    }, [category]);

    return state; //* { data: [], loading: true }
}