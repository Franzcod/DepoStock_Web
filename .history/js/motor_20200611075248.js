// https://deposito-2ac44.firebaseio.com/productos/-M9AJ2XQICqMjdDq30Qv/posicion.json


// INIT() llama funciones cuando carga o abre la pagina
console.log('agregado perro');


var firebaseConfig = {
    apiKey: "AIzaSyBlcge8qkZbZKFakTpUSGsLKVOQyEz3-lA",
    authDomain: "deposito-2ac44.firebaseapp.com",
    databaseURL: "https://deposito-2ac44.firebaseio.com",
    projectId: "deposito-2ac44",
    storageBucket: "deposito-2ac44.appspot.com",
    messagingSenderId: "626664347161",
    appId: "1:626664347161:web:708b876cc478c062e4fc88",
    measurementId: "G-QFWY80N7MN"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);




var id = 1234455;
var posicion = "D-9-9";
var producto = "Car Duster Chico";
var lote = "L777"

function arrayJSON(id,posicion ,producto, lote ){
    var data= {
        id : id,
        posicion : posicion,
        producto : producto,
        lote: lote
    };
    return data;
}

// CARGA ELEMENTO AL DATABASE DE FIREBASE!!!
function insertTask(){
    var arrayData = arrayJSON(id,posicion , producto, lote);
    // console.log(arrayData);
    var task = firebase.database().ref("productos/" + id);
    task.set(arrayData);
}

function table(producto, cantidad){
    return '<tr>' +
    '<td>' + producto + '</td>' + 
    '<td>' + cantidad + '</td>' +
    '</tr>'
}

//poner el onliad en el body para q cargue cuando abre
function watchTask(){
    var task = firebase.database().ref("productos/1234/lote");
    task.on("child_added", function(data){
        var taskValue = data.val();
        Console.log(task);

    })
};

insertTask();
//ejecuta cuando carga la webwindow.onload=insertTask;