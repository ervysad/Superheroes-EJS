const express = require("express");
const parser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use("/public",express.static("public")); //this metod let the public folder to be static in order to read the complement files.

const https = require("https");
var baseUrl = "https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes";

var names = [];
var imgsrcs = [];
var occupation = [];
var alignment = [];
var location = [];


app.get("/",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=1";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});


app.get("/page2",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=2";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page3",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=3";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page4",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=4";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});


app.get("/page5",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=5";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});


app.get("/page6",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=6";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page7",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=7";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page8",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=8";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page9",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=9";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});

app.get("/page10",function(req, res){
    baseUrl="https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes/?page=10";
    //get all superheroes info 
    https.get(baseUrl, function (urlresponse) {  
        console.log(urlresponse.statusCode); 
        urlresponse.on("data",function(urldata){   
            var arraydata = JSON.parse(urldata);
            for (var i = 0; i < arraydata.items.length; i++) {
                names[i] = arraydata.items[i].name;
                imgsrcs[i] = arraydata.items[i].images.lg;
                occupation[i] = arraydata.items[i].work.occupation;
                alignment[i] = arraydata.items[i].biography.alignment;
                location[i] = arraydata.items[i].work.base;
                
            }
            console.log(names);
        }); 
    }); 
    res.render("index",{namesejs: names, imagesejs:imgsrcs, occupationejs:occupation, alignmentejs:alignment, locationejs:location});
});




var port = 3000;
app.listen(port , function(){
    console.log("server started at port: "+port);
});