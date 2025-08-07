process.stdin.on("data", (chunk) => {

    process.stdout.write('data', ()=>{
        console.log("you entered:", chunk.toString())
    })
})