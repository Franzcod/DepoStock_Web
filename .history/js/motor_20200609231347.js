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


function getId(id){
    return document.getElementById(id).nodeValue;
}

const posicion = "D-9-9";
const producto = "Car Duster Grande";
const lote = "L777"

function arrayJSON(posicion ,producto, lote ){
    var data= {
        posicion : posicion,
        producto : producto,
        lote: lote
    };
    return data
}


function insertTask(){
    var arrayData = arrayJSON(posicion , producto, lote);
    console.log(arrayData);
    // var task = firebase.database().ref("productos/");
    // task.set()
}