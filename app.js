// app.js

var mongo = require("mongodb").MongoClient;
//requires a mongo data base
var prompt = require("prompt-sync")();
//requires prompt sync
//empy praentese syays bring in everything-default
var url = "mongodb://localhost:27017/restaurant_db";
//connecting to database
  //sets up collections


  mongo.connect(url, function(err, db){
  //connests everthing above and starts function
  var collection = db.collection('restaurants');

  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  //creating varibale called all chocie
  //promt method for promt sync database

//---------- Shows all the Redtruants -----//
//    var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//    if(allChoice == "all"){
//        collection.find().toArray(function(err, doc){
//        console.log(doc);
//     });
//  } else {
//    console.log("Aw, you don't want to see the restaurants?");
//  }
//});

// ---- Shows one resturant only when typed in ------ //

//  var chooseOne = prompt("Type the name of the restaurant and press enter to display the restaurant's info: ");
//  collection.find({ "name" : chooseOne }).forEach( function(doc){
//    console.log(doc);
//  });

// ------ Users add opne resturant -----//

  var addOne = prompt("Type 'yes' to add a new resturant: ");
  //promts the use to start the add one proccess

  var addOneName = prompt("Type the name of the resturnat and press enter to add the new name: ");
  // add the resturnats name

  var addOneStreet = prompt("Type the address of the resturant and press enter to add the address: ");
  // adds the restruants street address

  var addOneCity = prompt("Type the city the resturant is loacted in and press enter to add the city: ");
  // adds the resturants city

  var addOneYelp = prompt("Type the yelp URL and press enter to add the URL: ");
  //adds the restrunrants yelp address

  var newRestaurant = { "name" : addOneName, "street" : addOneStreet, "city" : addOneCity, "yelp" : addOneYelp }
  //adds each item above into a varibale new restruant 

  if (addOne == "yes") {
    //id the add one promt is yes

    collection.insert(newRestaurant);
    //insert new restruant into the restruant database

  } else {
    console.log("Aw, you don't want to add a restaurant?");
    //otherwise console log statemnt
  };
  console.log(newRestaurant);
  //console log tthe new restruant that was added


// ------ Users edit a resturant -------//


//--------- Users delete restruant --------//

});