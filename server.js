const http = require("http")
const url = require("url")

// express = framework third party untuk memudahkan http

const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathUrl = req.url

    // default selalu ada : 
    // localhost:3000/ = health check, cek aplikasi jalannya nyala ga
    // 404 = handle jika url tidak ada, salah satu ngarang /awdasdawda = tidak ada, http status code = 404 

    if(pathUrl === "/yogi"){
        res.end("ini tugas yang yogi")
    } else if (pathUrl === "/"){
        res.end("hello tim 7")
    }else{
        res.end("ini ga ada! status code 404")
    }
})

// port = 3000/8000
server.listen(3000, '127.0.0.1', () => {
    console.log("Aplikasi jalan ini di port 3000")
})