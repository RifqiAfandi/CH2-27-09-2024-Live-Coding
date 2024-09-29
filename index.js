const fs = require("fs").promises;
const fsSync = require("fs");

// 1. Membaca file surat cinta fsw 2
const loveLetter = fs.readFileSync("./index.txt", "utf-8")

// 2. Proses print isi dari surat cinta
console.log(loveLetter)

// 3. Membuat file baru untuk balas surat cinta
const loveFeedback = "Aku juga sayang FSW 2!"
const writeResult = fs.writeFileSync("./balasan.txt", loveFeedback)

// fs.mkdir("Coba_Bikin_Folder", () => {} ) // mkdir = membuat folder

// console.log(writeResult) // output = undifined / error bila tidak ada folder txt

// async function
async function name(params) {
    try {
        const bacaSuratCinta = await fs.readFile("./index.txt", "utf-8")
        console.log(bacaSuratCinta)
    }catch(error) {
        console.log(error)
    }
}

bacaSuratCinta()

//asynchronous file/write (gagal, dikarenakan scope mutlak)
fs.readFile("./index.txt", "utf-8")
    .then((isiSuratCinta) => {
        console.log(`ini isi surat cinta dari async js ${isiSuratCinta}`)})
    .catch((error) => {
        console.log(error)
    })

console.log(readLoveLetter)