const { dir } = require('console');
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Membuat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json', '[]' , 'utf-8');
}


const pertanyaan = (pertanyaan) => {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (answer) => {
            resolve(answer); 
        });
    });
}

const simpanKontak = (nama ,umur)=>{
    const contact = {nama ,umur};
    const file = fs.readFileSync('data/contacts.json' , 'utf-8');

    try{
        // kalo file nya ga kososng, isinya di parsing ke JSON, kalau kosong dikasi array kosong
        const contacts = JSON.parse(file);

        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts ,null , 2));

        console.log(`Selamat datang, ${nama}!`);

    } catch(err){
        console.log('Error reading file:', err);
        return;
    }
    rl.close()
}

module.exports = { simpanKontak, pertanyaan};
