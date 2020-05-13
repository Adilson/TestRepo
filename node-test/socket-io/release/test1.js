var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var loggedClients = 0;
io.on('connection', function(client){
    loggedClients++;
    //console.log('socket.conn', client.conn);
    console.log(`Cliente logou. ${loggedClients} clientes logados`);
    client.on('event', function(data){
    });
    client.on('disconnect', function(){
        loggedClients--;
        console.log(`Cliente deslogou. ${loggedClients} clientes logados`);
    });
});

//Static
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
app.use('/static', express.static('public'));

//Iniciando
console.log('Escutando na porta 3000');
server.listen(3000);
