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

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = file.length ? JSON.parse(file) : [];
    return contacts;
}

const simpanKontak = (nama, email, umur) => {
    const contact = { nama, email, umur };

    try {
        // kalo file nya ga kososng, isinya di parsing ke JSON, kalau kosong dikasi array kosong
        const contacts = loadContact();


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

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

        console.log(`Selamat datang, ${nama}!`);

    } catch (err) {
        console.log('Error reading file:', err);
        return;
    }
    // rl.close()
}

const lihatKontak = () => {
    const contacts = loadContact();
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.email}`);

    })
};

const detailKontak = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    if (!contact) {
        console.log(chalk.inverse.red.bold(`${nama} tidak ditemukan`));
        return false;
    }


    console.log(`Nama: ${contact.nama}`);
    console.log(`Nomor: ${contact.nomor}`);
    console.log(`Email: ${contact.email}`);


}

const hapusKontak = (nama) => {
    const contacts = loadContact();
    const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())
    if (contacts.length === newContact.length) {
        console.log(chalk.inverse.red.bold(`${nama} tidak ditemukan`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact, null, 2));

    console.log(`Kontak ${nama} berhasil dihapus!`);
}


module.exports = { simpanKontak , lihatKontak , detailKontak , hapusKontak };
