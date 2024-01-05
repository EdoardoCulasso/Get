let http = require("http")
let fs = require("fs")
let querystring = require("url") //ripulire la stringa

http.createServer((req, res)=>{

    let parametro = querystring.parse(req.url, true)

    switch (parametro.query.cognome) {
        case "GIORDANO":
            res.end("ANDREA")
            break;
        case "ROSSI":
            res.end("PAOLO")
            break;

        default:
            break;
    }

    //res.end(parametro.query.cognome)

}).listen("3000")