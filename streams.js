import fs from "node:fs"

const readable = fs.createReadStream('./chatSys.js', {encoding: 'utf-8'})
readable.on('data', (data)=>{
    console.log("got data", data)
})
readable.on('end', ()=>{
    console.log("finish reading")
})