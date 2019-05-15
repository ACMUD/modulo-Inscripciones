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

function requesterCrudServer(method, endPoint, successfullCallback, errorCallback, dataPost, otherHeaders = {}) {
    let headers = { ...headersBase, ...otherHeaders }
    console.log('----------------------------------------------------------')
    console.log('URL: ', endPoint)
    console.log('Method: ', method)
    console.log('DataPost: ', dataPost)
    console.log('----------------------------------------------------------')
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