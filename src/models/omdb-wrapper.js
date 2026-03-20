/* Módulo  OMDBWrapper*/

import axios from "axios";

const APIKEY = "bb792b79";

const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`
    );

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(response.data.totalResults);
      returnObject.datos = response.data.Search;
    }
      
  return returnObject;
};

const OMDBSearchComplete = async (searchText) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };

   const first = await OMDBSearchByPage(searchText, 1);

    if (!first.respuesta) return returnObject;

    returnObject.respuesta = true;
    returnObject.cantidadTotal = first.cantidadTotal;
    returnObject.datos = [...first.datos];

    // OMDB trae 10 resultados por página
    const totalPages = Math.ceil(first.cantidadTotal / 10);

    // traigo el resto
    for (let i = 2; i <= totalPages; i++) {
      const pageData = await OMDBSearchByPage(searchText, i);
      returnObject.datos.push(...pageData.datos);
    }
  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : {}
    };

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`
    );

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data;
    }

  return returnObject;
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};