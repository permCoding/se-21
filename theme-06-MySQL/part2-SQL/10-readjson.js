// npm i node-fetch

const fetch = require('node-fetch');
const _ = require('lodash');

function ex_6(url) {
    fetch(url)
        .then(resp => console.log(resp));
    // .then((json)=>console.table(
    //     _.orderBy(json, ['rating','lastName'],['desc','asc']))
    // );
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then((json)=>console.table(
    //         _.orderBy(json, ['rating','lastName'],['desc','asc']))
    //     );
}

ex_6('https://pCoding.ru/csv/abiturs.json');
