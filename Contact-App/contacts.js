const { dir } = require('console');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const validator = require('validator');



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


//Membuat folder data
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

if (!fs.existsSync('./data/contacts.json')) {
    fs.writeFileSync('./data/contacts.json', 'utf-8');
}


// const pertanyaan = (pertanyaan) => {
//     return new Promise((resolve) => {
//         rl.question(pertanyaan, (answer) => {
//             resolve(answer); 
//         });
//     });
// }

const simpanKontak = (nama, email, umur) => {
    const contact = { nama, email, umur };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');

    try {
        // kalo file nya ga kososng, isinya di parsing ke JSON, kalau kosong dikasi array kosong
        const contacts = file.length ? JSON.parse(file) : [];

        // cek duplikat
        const duplikat = contacts.find((contact) => contact.nama == nama)
        if (duplikat) {
            console.log(chalk.inverse.red.bold('Nama sudah ada, silahkan masukkan nama yang lain.'));
            return false;
        }

        // cek email
        if (!validator.isEmail(email)) {
            console.log(chalk.inverse.red.bold('Format email salah, silahkan masukkan email yang valid.'));
            return false;
        }

        // cek HP
        if (!validator.isNumeric(umur)) {
            console.log(chalk.inverse.red.bold('Format email salah, silahkan masukkan email yang valid.'));
            return false;
        }




        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

        console.log(`Selamat datang, ${nama}!`);

    } catch (err) {
        console.log('Error reading file:', err);
        return;
    }
    // rl.close()
}

module.exports = { simpanKontak };
