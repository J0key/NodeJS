function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14

const mahasiswa = {
    nama : 'Shyra',
    usia: 21,
    cetakMhs (){
        return `Halo, nama saya ${this.nama}`;
    }
}

class Orang{
    constructor(){
        console.log('objek orang telah dibuat')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
}
