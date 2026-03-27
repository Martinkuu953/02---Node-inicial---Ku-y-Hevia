import axios from "axios";

const APIKEY = "bb792b79";

const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };

    //Cuerpo

    const resultado = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`
    );

    if (resultado.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(resultado.data.totalResults);
      returnObject.datos = resultado.data.Search;
    }
    
    //Fin De Cuerpo

  return returnObject;
};

const OMDBSearchComplete = async (searchText) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };

    //Cuerpo

    const primeraPag = await OMDBSearchByPage(searchText, 1);

    if (!primeraPag.respuesta) return returnObject;

    returnObject.respuesta = true;
    returnObject.cantidadTotal = primeraPag.cantidadTotal;
    returnObject.datos = [...primeraPag.datos];

    const totalPaginas = Math.ceil(primeraPag.cantidadTotal / 10);

    for (let i = 2; i <= totalPaginas; i++) {
      const datosPagina = await OMDBSearchByPage(searchText, i);
      returnObject.datos.push(...datosPagina.datos);
    }

    //Fin De Cuerpo

  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : {}
    };

    //Cuerpo

    const respuesta = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`
    );

    if (respuesta.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = respuesta.data;
    }

    //Fin De Cuerpo

  return returnObject;
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
