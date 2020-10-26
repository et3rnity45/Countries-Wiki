import Axios from 'axios';

const RESOURCE_NAME = 'https://restcountries.eu/rest/v2';
const FILTERS = '?fields=name;alpha3Code;capital;region;subregion;population;area;gini;borders;currencies;languages;altSpellings;flag&fullText=true';
const SEARCH_FILTERS= '?fields=name;alpha3Code';

export default {

    async getAll() {
        return await Axios.get(`${RESOURCE_NAME}/all${SEARCH_FILTERS}`);
    },

    async getByName(name) {
        return await Axios.get(`${RESOURCE_NAME}/name/${name}${FILTERS}`)
    },

    async getSmallByCode(code) {
        return await Axios.get(`${RESOURCE_NAME}/alpha/${code}?fields=name;alpha3Code`);
    }
}