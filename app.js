// app.js

var mongo = require("mongodb").MongoClient;
  //requires a mongo data base
var prompt = require("prompt-sync")();
  //requires prompt sync
  //empy praentese syays bring in everything-default
var url = "mongodb://localhost:27017/restaurant_db";
  //connecting to database
mongo.connect(url, function(err, db){
  //connests everthing above and starts function
var collection = db.collection('restaurants');
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

// ------ Users add one resturant -----//

//  var addOne = prompt("Type 'yes' to add a new resturant: ");
  //promts the use to start the add one proccess
//  var addOneName = prompt("Type the name of the resturnat and press enter to add the new name: ");
  // add the resturnats name
//  var addOneStreet = prompt("Type the address of the resturant and press enter to add the address: ");
  // adds the restruants street address
//  var addOneZip = prompt("Type the zip code the resturant is loacted in and press enter to add the zip code: ");
  // adds the resturants zip code
//  var addOneYelp = prompt("Type the yelp URL and press enter to add the URL: ");
  //adds the restrunrants yelp address
//  var newRestaurant = { "name" : addOneName, "street" : addOneStreet, "city" : addOneZip, "yelp" : addOneYelp }
  //adds each item above into a varibale new restruant 
//    if (addOne == "yes") {
      //id the add one promt is yes
//      collection.insert(newRestaurant);
      //insert new restruant into the restruant database
//    } else {
//      console.log("Aw, you don't want to add a restaurant?");
      //otherwise console log statemnt
//    }
//    console.log(newRestaurant);
    //console log the new restruant that was added

// ------ Users edit a resturant -------//

//  var updateResturant = prompt("Type the name of the restruant you want to update: ");
//   collection.find({"name" : updateResturant}).forEach(function(doc){
//    console.log(doc);

 //   var updateFeild = prompt("Please type the feild you would like to update and press enter: 'name', 'streetAddress', 'zip code' or 'yelpUrl'? ");
    
//    if (updateFeild == "name") {
//      var newName = prompt("Please type the name you want to update and press enter: ");
//      collection.update( {"name" : updateResturant}, {$set:{ "name" : newName}});
//      console.log(newName);

//    } else if (updateFeild == "streetAddress") {
//      var newStreet = prompt("WPlease type the address you want to update and press enter: ");
//      collection.update( {"name" : updateResturant}, {$set:{ 'address.street' : newStreet}} );
//      console.log(newStreet);

//   } else if (updateFeild == "zip code") {
//      var newZip = prompt("Please type the zipcode you want to update and press enter: ");
//      collection.update( {"name" : updateResturant}, {$set:{ 'address.zipcode' : newZip}} );
//      console.log(newZip);

//    } else if (updateFeild == "yelpUrl"){ 
//      var newYelp = prompt("Please type tje yelpUrl you want to update and press enter: ");
//      collection.update( {"name" : updateResturant}, {$set:{ "yelp": newYelp}} );
//      console.log(newYelp);
    
//    } else {
//      console.log("Please enter one of the feilds in '' exactly as it appears and press enter ");
//    } 

// });


//--------- Users delete restruant --------//

var deleteResturnat = prompt("Please enter the name of the restrunat you want to delete and press enter: ");
  collection.find({"name" : deleteResturnat}).forEach(function(doc){
    console.log(doc);
    collection.remove({"name" : deleteResturnat});
  });

});