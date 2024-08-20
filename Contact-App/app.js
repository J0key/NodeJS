const {  simpanKontak , lihatKontak ,detailKontak , hapusKontak} = require('./contacts');
const yargs = require('yargs');


// const daftarKontak = async() => {
//     const nama = await pertanyaan('masukkan nama anda: ')
//     const umur = await pertanyaan('masukkan umur anda: ')

//     simpanKontak( nama , umur);


// }

// daftarKontak();

// tambah kontak
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
}).demandCommand();


// lihat list
yargs
.command({
    command: 'list',
    describe: 'Daftar semua kontak',
    handler() {
        lihatKontak();
    }
})

// tambah detail
yargs
.command({
    command: 'detail',
    describe: 'Detail kontak',
    builder: {
        nama: {
            describe: 'Nama kontak',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        detailKontak(argv.nama);
    }
})


// hapus kontak
yargs
.command({
    command: 'remove',
    describe: 'menghapus kontak',
    builder: {
        nama: {
            describe: 'Nama kontak',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        hapusKontak(argv.nama);
    }
})

yargs.parse()
