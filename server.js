// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/UserDB', { useNewUrlParser: true });
// const UserSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })

// // crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
// const User = mongoose.model('User', UserSchema);

const myexpress = require('express')
const myapp = myexpress()

//para recuperar campos de formularios
let bodyParser = require('body-parser');
const { response } = require('express');
myapp.use(bodyParser.urlencoded({ extends: true }))

//para porde referenciar los contewnnidos estatisos como imagenes, js, styles
myapp.use(myexpress.static(__dirname + "/public"));

//carpete de todos los htmls que son interpretados como ejs
myapp.set('views', __dirname + '/views');

//motor interprete de las vistas
myapp.set('view engine', 'ejs');

myapp.get('/', (req, res) => {
    res.render('index'); 
});
myapp.post('/', (req, res) => {
    res.render('index'); 
});


myapp.post('/resultado', function (req, res) {

    let myname = req.body.name;
    let mydojoLocation = req.body.dojoLocation;
    let myfavoriteLenguage = req.body.favoriteLenguage;
    let mycomentario = req.body.comentario

    let myencuesta = 
        {name: myname, dojoLocation: mydojoLocation, favoriteLenguage:myfavoriteLenguage, comentario:mycomentario} 
    ;
    
    res.render('resultado', {encuesta: myencuesta})
})


myapp.listen(5000, function () {
    console.log('Aplicacion iniciada escuchando en http://localhost:5000');
});
