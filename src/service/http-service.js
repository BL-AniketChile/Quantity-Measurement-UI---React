import axios from 'axios';
import constant from '../config/Constant';

export class HttpService{
    getAllUnitTypes(){
        return axios({
            method: 'GET',
            url: `${constant.apiUrl}unit/type`
        })
        .then(result => {
            return result;
        });
    }

    getAllUnitsByUnitType(unitType){
        return axios({
            method: 'GET',
            url: `${constant.apiUrl}unit/type/${unitType}`
        })
        .then(result => {
            return result;
        });
    }

    convertUnitValueToGivenUnitType(requestBody){
        return axios({
            method: 'POST',
            url: `${constant.apiUrl}unit/convert`,
            data: requestBody
        })
        .then(result => {
            return result;
        });
    }
}
