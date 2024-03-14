const http = require('http')
const url = require('url');

const ListNome = ["Mago","Javier Figueiredo","Breno K olho","Negão da Bl"]

http.createServer(function(req,res){
    

    var query = url.parse(req.url,true).query;


    const pages = []
    pages["/"] = "Bem vindo Mago"
    pages["/Add"] = ListNome.push(query)
    pages["/getNomes"] = JSON.stringify(ListNome)
    pages["semEndereco"] = "Ainda sem endereço"

    res.end(pages[req.url])


}).listen(8080)



console.log("Api On")