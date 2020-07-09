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
firebase.analytics();



var id = 12345654321;
var posicion = "D-9-9";
var producto = "Car Duster Grande";
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


function insertTask(){
    var arrayData = arrayJSON(id,posicion , producto, lote);
    console.log(arrayData);
    var task = firebase.database().ref("productos/");
    task.set(arrayData);
}

insertTask();
//ejecuta cuando carga la webwindow.onload=insertTask;