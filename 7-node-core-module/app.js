// panggil core module -> file system
const fs = require('fs');

// menuliskan string ke file secara (synchronus) pada folder yang sama
// fs.writeFileSync('test.txt', 'ini text synchronus');


// menuliskan string ke file secara (asynchronus) pada folder yang sama
// fs.writeFile('testAsync.txt', 'ini text async' , (e) => console.log(e));

// membaca file secara (synchronus) pada folder yang sama
// const syn = fs.readFileSync('testAsync.txt' , 'utf-8')
// console.log(syn);


// membaca file secara (asynchronus) pada folder yang sama
// const data = fs.readFile('testAsync.txt', 'utf-8', (err, data) => {
// if (err) {
//   console.log('Error reading file:', err);
// } else {
//   console.log('File contents:', data);
// }

// with throw
//     if (err) throw err;
//     console.log('File contents:', data);
//   });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan umur anda: ', (umur) => {
        const contact = {nama ,umur};
        const file = fs.readFileSync('contacts.json' , 'utf-8');

        try{
            // kalo file nya ga kososng, isinya di parsing ke JSON, kalau kosong dikasi array kosong
            const contacts = file.length ? JSON.parse(file) : [];

            contacts.push(contact);
            
            fs.writeFileSync('contacts.json', JSON.stringify(contacts ,null , 2));
    
            console.log(`Selamat datang, ${nama}!`);

        } catch(err){
            console.log('Error reading file:', err);
            return;
        }


        rl.close();
    });
});


