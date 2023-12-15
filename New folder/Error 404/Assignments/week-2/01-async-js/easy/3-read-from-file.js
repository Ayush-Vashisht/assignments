const fs = require("fs");
console.log("Start");
fs.readFile("week-2/01-async-js/easy//a.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("end");