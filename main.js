var mongoose = require("mongoose");
var schema = require("./Schema");

mongoose.connect('mongodb://localhost:27017/test');
// arameters are model name, shcema, collection name
var Autor = mongoose.model('Autor',schema,'Autores');


//document, guarda un elemento
var autor = new Autor({
    title: "El cuento bonito",
    author: "Jose Maldonado",
    body: "pues mas cuerpo",
    comments: [{body: "Este es un comentario" , date: Date.now()},{body: "Este es un comentario 2" , date: Date.now()}],
    date: Date.now(),
    hidden:true,
    meta:{
        votes: 5,
        favs : 6
    }
});

/////////////////////////////////////
//guardar
autor.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardardado");
    process.exit(0);
});
 
// busqueda general
Autor.find(function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Busqueda general ");
    console.log(product);
});
// busqueda por autor
Autor.findOne({author:'Jose Maldonado'},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Busqueda especifica");
    console.log(product);
});  

//econtrar y eliminar
Autor.findOneAndDelete({author:'Keylord Maldonado'},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Eliminar un elemento");
    console.log(product);
});

//encotnrar y actualizar
Autor.findOneAndUpdate({author:'Jose Maldonado'}, { $set: { author: 'Keyboard' }},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Actualizar un elemento");
    console.log(product);
});
 