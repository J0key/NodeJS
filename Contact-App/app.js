const { pertanyaan, simpanKontak } = require('./contacts');

const daftarKontak = async() => {
    const nama = await pertanyaan('masukkan nama anda: ')
    const umur = await pertanyaan('masukkan umur anda: ')

    simpanKontak( nama , umur);


}

daftarKontak();





