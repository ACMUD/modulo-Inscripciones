const axios = require('axios');
const urlBase = 'http://localhost:8080/v1/';
const urlPokeApi = 'https://pokeapi.co/api/v2/';
var headersBase = {
    'Content-Type': 'application/json'
}

function getPokeApi(endPoint, successfullCallback, errorCallback) {
    requesterHTTP(
        'get',
        urlPokeApi.concat(endPoint),
        headersBase,
        successfullCallback,
        errorCallback
    )
}

// ------------------------ GENERIC FUNCTIONS ------------------------
function requesterHTTP(method, url, headers, successfullCallback, errorCallback, data) {
    axios({
        method,
        url,
        headers,
        data
    })
        .then(successfullCallback)
        .catch(errorCallback);
}

function requesterCrudServer(method, endPoint, otherHeaders, successfullCallback, errorCallback, dataPost) {
    let headers = { ...headersBase, ...otherHeaders }
    axios({
        method,
        headers,
        url: endPoint,
        baseURL: urlBase,
        data: dataPost
    })
        .then(successfullCallback)
        .catch(errorCallback);
}

export {
    requesterHTTP,
    requesterCrudServer,
    getPokeApi
}