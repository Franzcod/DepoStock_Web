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




// var id = 1234455;
// var posicion = "A-4-22";
// var producto = "Car Duster Chico";
// var lote = "L777";
// var cantidad = 99;

function arrayJSON(id,posicion ,producto, lote ){
    var data= {
        id : id,
        posicion : posicion,
        producto : producto,
        lote: lote,
        cantidad : cantidad

    };
    return data;
}

// CARGA ELEMENTO AL DATABASE DE FIREBASE!!!
function insertTask(){
    var arrayData = arrayJSON(id,posicion , producto, lote, cantidad);
    // console.log(arrayData);
    var task = firebase.database().ref("productos/" + id);
    task.set(arrayData);
}

function innerHTML(posicion,result){
    return document.getElementById(posicion).innerHTML+=result;
}

function table(producto, cantidad, lote){
    return  '<tr>' +
                '<td class="td-prod">' + producto + '</td>' +

                '<td class="td-lote">' + lote + '</td>' +
                
                '<td class="td-cantidad">' + cantidad +'</td>' +
            '</tr>';
}

//Funcion para mostrar en html el contenido de firebase
//poner el onload en el body para q cargue cuando abre
function watchTask(){
    var task = firebase.database().ref("productos/");
    task.on("child_added", function(data){
        var taskValue = data.val();
        var result = table( taskValue.producto , taskValue.cantidad , taskValue.lote);
        innerHTML("A-4-23",result);
    });
}


//Funcion de prueba!!!!!!!!!!!
//poner en onload

function porPosicion() {    

    var db = firebase.database();
    var ref = db.ref("productos");
    
    var table = document.getElementById("A-4-23");
        
    //limpia la tabla
    table.innerHTML = "";
    
     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
        
    ref.orderByChild(id).on("child_added", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var d = snapshot.val();        
            
    {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    // asigna a las celdas el valir del Child especificado
    cell1.innerHTML = d.email;
    cell2.innerHTML = d.tipo;
    }
    
        
});
    
}

