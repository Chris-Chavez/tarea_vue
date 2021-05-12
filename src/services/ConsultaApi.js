import axios from 'axios';
import mapResponse from '../services/map-response';
import Config from '../config/config';

export default
    {
        registros: null,
        respuesta: null,
        data: 0,

        ObtenerGatos: () => {
            return mapResponse(axios.get(Config.rutaBase + '/facts'));
        },        
        ObtenerDetallesGatos: (factID) => {
            return mapResponse(axios.get(Config.rutaBase + '/facts/'+ factID));
        },
        ObtenerGatoRandom: () => {
            return mapResponse(axios.get(Config.rutaBase + '/facts/random'));
        },
        
    }
