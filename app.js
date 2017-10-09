// app.js

var mongo = require("mongodb").MongoClient;
//requires a mongo data base
var prompt = require("prompt-sync")();
//requires prompt sync
//empy praentese syays bring in everything-default
var url = "mongodb://localhost:27017/restaurant_db";
//connecting to database
  //sets up collections

  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  //creating varibale called all chocie
  //promt method for promt sync database
  //promt takes repsonses
var names = [];

  mongo.connect(url, function(err, db){
  //connests everthing above and starts function
  var collection = db.collection('restaurants');
    for (i=0; i<collection.length; i++);
      i.push(names);
  var chooseOne = prompt("Type 'name of restruant' and press enter to display name: ");
    console.log(names[i]);
    if(names[i] == chooseOne){
      //if all chocie recives text message of all keep going
      collection.find().toArray(function(err, doc){
        //go into collection(restrunats) find everything and spit it out to array
       console.log(doc);
        //console logs everything
      });
    } else {
      console.log("Aw, you don't want to see the restaurants?");
      //type anything else this will fire
    }
});
//Task 1
//add a promt that allows you to use .find and for each to 
//just find something for a specific name
 
