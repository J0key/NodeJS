const chalk = require('chalk');
const validator = require('validator');

const nama = 'shyra';
const pesan = chalk`{bgBlue halo} perkenalkan nama saya {bgRed ${nama}}`;
console.log(pesan);
