const express = require('express');
const SocketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = SocketIo.listen(server);

//JOHNNY FILE SERIALPORT//////////////////////////////////////////////////////////
//var five = require("johnny-five")
var firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
//var board = new five.Board({ port: "COM4" });
/*
board.on("ready", function () {
  var led = new five.Led(13);
  var rele = new five.Relay(8);
  var rele1 = new five.Relay(7);
  var rele2 = new five.Relay(6);
  var rele3 = new five.Relay(5);
  var rele4 = new five.Relay(4);
  this.repl.inject({
    led: led,
    rele: rele,
    rele1: rele1,
    rele2: rele2,
    rele3: rele3,
    rele4: rele4
  });
*/
// Initialize Firebase
/*var config = {
  apiKey: "AIzaSyC_Y0KDaIpOBiHnLsbs2ZdxdQfJjOU1gnQ",
  authDomain: "iot-itemp.firebaseapp.com",
  databaseURL: "https://iot-itemp.firebaseio.com",
  storageBucket: "iot-itemp.appspot.com"
};*/
var config = {
    apiKey: "AIzaSyAQQqAXOHaeHRH7uZUyN1rKtzbxRIHfu6w",
    authDomain: "arquitectura-96b7d.firebaseapp.com",
    databaseURL: "https://arquitectura-96b7d.firebaseio.com",
    projectId: "arquitectura-96b7d",
    storageBucket: "arquitectura-96b7d.appspot.com",
    messagingSenderId: "289419683599"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/*db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().campo}`);
    });
});*/

db.collection("botones")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges.forEach(function(change) {
        console.log(`${change.doc.id} = ${change.doc.data().reley}`);
        });
    });



    

/*
firebase.initializeApp(config);
var starCountRef = firebase.database().ref('reley').on('value', function (snapshot) {
  let reley = snapshot.val();
  if (reley == 'on') {
   console.log('if');
  } else {
  console.log('else');
  }
});*/

server.listen(8080, () => {
    console.log('Server on port 8080');
});