const fs = require("fs");

function fileCleaner(){
    let f = new Promise((resolve)=>{
        fs.readFile("week-2/01-async-js/medium/data.txt","utf-8",(err,data)=>{
            if(err){console.error(err);return;}
            console.log(data);
            let newData=data.replace(/\s+/g, " ").trim();

            fs.writeFile("week-2/01-async-js/medium/data.txt",newData,"utf-8",(err)=>{
                if(err){console.error(error);return;}
                console.log("File cleaned successfully.")
            })
        });
        resolve();
    });
    return f;
};

let a =fileCleaner();
a.then(()=>{
    fs.readFile("week-2/01-async-js/medium/data.txt","utf-8",(err,data)=>{
        if(err){console.error(err);return;}
        console.log(data);
    });
});