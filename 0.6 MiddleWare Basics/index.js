const express=require('express'); 

const app=express(); //

function oldEnough(age){
    if(age>=14){
        return true; 
    }
    else{
        return false; 
    }
}

function isOldenoughMidleWare(req,res,next){ //reason next it is not last call it will be called again and again m
    const age=req.query.age; 
    if(age>14 && age<=50){
        res.json({
            msg:"Enjoy your ride baby boy and baby girls"
        })
    }
    else if(age>50){
        res.json({
            msg:"Chachaa upar chal jayega to mereko mat bolna"
        })
    }
    else{
        res.json({
            msg:"So sorry :<"
        })
    }

}

// for adding in every routes this is used 
// app.use(isOldenoughMidleWare); //make sure to write is above the whole all ckecks. => order is also matter 
// Either defined them inside the routes ==> ki hua app.use(midleware kaha use kare phele ya baad me)

app.get("/ride1",isOldenoughMidleWare, function(req,res){
    res.json({
        msg:"Enjoy the Ride one baby boys and girls"
    })
   
})

app.get("/ride2",isOldenoughMidleWare, function(req,res){
    res.json({
        msg:"Enjoy the Ride two baby boys and girls"
    })
   
})

app.listen(3000); 
