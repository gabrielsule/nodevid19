const request = require('request');

var callApi = (pais, callback) => {
    request({
        url: `https://api.covid19api.com/total/country/${pais}/status/confirmed`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('No es posible conectar con el server');
        } else if (res.length === 0) {
            callback('No hay datos en el pais seleccionado');
        } else if (res.statusCode === 200) {

            body.forEach(function (obj) {
                delete obj['CountryCode'];
                delete obj['CityCode'];
                delete obj['Lat'];
                delete obj['Lon'];
                delete obj['Status'];
            })

            callback(body);
        }
    });
}

module.exports.callApi = callApi;