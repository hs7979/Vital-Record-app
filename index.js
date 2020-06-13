var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    user = require("./models/user"),
    details = require("./models/details"),
    daily = require("./models/daily");


mongoose.connect("mongodb://localhost/hackcovid");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
//======================
//passport configuration
//======================
app.use(require("express-session")({
    secret:"Burn in Hell",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(function(req,res,next){
    res.locals.currUser = req.user;
    next();
});
//============================================================================================

app.get("/",function(req,res){
    res.render("home");
});
//SHOW ROUTES
app.get("/show",isLoggedIn,function(req,res){
    details.findById(req.user._id,function(err,own){
        if(err){
            console.log(err);
        }else{
            res.render("show",{det:own});
        }
    });
});
app.get("/allshow",isLoggedIn,function(req,res){
    res.send("success!!!")
})
//DETAILS ROUTE
app.get("/form",isLoggedIn,function(req,res){
    res.render("form");
});
app.post("/form",isLoggedIn,function(req,res){
    var age=req.body.age,
        bloodtype= req.body.bloodtype,
        meddis= req.body.meddis,
        diabetic= req.body.diabetic,
        height=req.body.height,
        weight= req.body.weight,
        BMI =weight/((height)^2),
        owner={
            id:req.user._id,
            username:req.user.username
        };
    if(diabetic == on)
    {
        diabetic=true;
    }
    var d={_id:req.user._id,age:age,bloodtype:bloodtype,meddis:meddis,diabetic:diabetic,height:height,weight:weight,BMI:BMI,owner:owner};
    details.create(d,function(err,details){
        if (err){
            console.log(err);
        }
        else{
            res.redirect("/show");
        }
    });
});
//DAILY ENTRY ROUTES
app.get("/daily",isLoggedIn,function(req,res){
    res.render("daily");
});
app.post("/daily",isLoggedIn,function(req,res){
    var d=req.body.date,
        bp={
            Systole:req.body.BPsys,
            Diastole:req.body.BPdia,
            Pulse:req.body.BPpul
        },
        o=req.body.o2,
        temp=req.body.temp,
        g=req.body.glucose,
        hrs=Math.abs(req.body.sleepstart-req.body.sleepend),
        owner={
            id:req.user._id,
            username:req.user.username
        };
    
    var day={_id:req.user._id,date:d,BP:bp,o2:o,glucose:g,temp:temp,sleep:hrs,owner:owner}
    daily.create(day,function(err,daydata){
        if(err){
            console.log(err);
        }else{
            res.redirect("/allshow");
        }
    })
})
//===========
//Auth routes
//===========
//SignUp
app.post("/signup",function(req,res){
    var newuser= new user({username:req.body.username});
    user.register(newuser,req.body.password,function(err,u){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("form");
        });
    });
});
//Login
app.post("/login",passport.authenticate("local",
    {
        successRedirect:"/show",
        failureRedirect:"/",
    }),function(req,res){
});
//Logout
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});
//middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

app.listen("3000",function(){
    console.log("Server has started");
});