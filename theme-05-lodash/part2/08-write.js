// UPDATE заменить номер крусатора в группе

const ut = require('./ut05');
const _ = require('lodash');
const { iteratee } = require('lodash');

let path = './csv/';
let file_name = 'groups.csv';
let groups = ut.csv_to_json(path + file_name);

function update(arr_g, group, idCur) {
    let index = _.findIndex(arr_g, obj => obj.nameGr == group);
    arr_g[index].idCur = idCur;
}


update(groups, 'ПИнб-3', 1);

ut.write_to_csv(groups, path + '_' + file_name);
