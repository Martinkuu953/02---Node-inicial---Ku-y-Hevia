import axios from "axios";
const APIKEY = "bb792b79";       
const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };
  return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };
  return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : {}
    };

  return returnObject;

};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};