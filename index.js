const yargs = require('yargs');
const Table = require('cli-table')
const moment = require('moment');
const call = require('./call/call');


const args = yargs.options({
    p: {
        demand: true,
        alias: 'pais',
        describe: 'Obtener datos por pais',
        string: true
    }
}).help().argv;

call.callApi(args.p, (res) => {
    let tablaArray = [];

    let table = new Table({
        head: ['Pais', 'Provincia', 'Ciudad', 'Casos', 'Fecha']
    });

    res.forEach((item) => {
        table.push([item.Country, item.Province, item.City, item.Cases, moment(item.Date).format('DD/MM/YYY')]);
    });

    console.log(table.toString());
});