const express = require("express");
const parser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static("public")); //this metod let the public folder to be static in order to read the complement files.

const https = require("https");
var baseUrl = "https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?page=";


var pageObjs = [];



https.get(baseUrl + 1, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[0]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 2, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[1]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 3, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[2]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 4, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[3]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 5, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[4]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 6, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[5]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 7, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[6]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 8, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[7]= JSON.parse(urldata);
    })
})
https.get(baseUrl + 9, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[8]= JSON.parse(urldata);
    })
})

https.get(baseUrl + 10, function (urlresponse) {
    urlresponse.on("data", function (urldata) {
        pageObjs[9]= JSON.parse(urldata);
    })
})




app.get("/", function (req, res) {
    res.render("index", {pageObjejs:pageObjs[0]})
});

for (let i = 1; i < 11; i++) {
    app.get("/page"+i, function (req, res) {
        res.render("index", {pageObjejs:pageObjs[i-1]})
        console.log(pageObjs[i-1].page);
    });
    
}



var port = 3000;
app.listen(port, function () {
    console.log("server started at port: " + port);
});

