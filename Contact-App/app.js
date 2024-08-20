const {  simpanKontak } = require('./contacts');
const yargs = require('yargs');


// const daftarKontak = async() => {
//     const nama = await pertanyaan('masukkan nama anda: ')
//     const umur = await pertanyaan('masukkan umur anda: ')

//     simpanKontak( nama , umur);


// }

// daftarKontak();


yargs.command({
    command: 'add',
    describe: 'Tambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Masukkan nama kontak',
            type:'string',
            demandOption: true
        },
        email: {
            describe: 'Masukkan email kontak',
            type:'email',
            demandOption: true
        },
        umur: {
            describe: 'Masukkan umur kontak',
            type: 'number',
            demandOption: true
        }
    },
    handler(argv) {
        simpanKontak(argv.nama, argv.email, argv.umur);
    }
})

yargs.parse()
