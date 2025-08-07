const os = require('os');
process.stdin.on("data", (chunk) => {

    process.stdout.write('data', ()=>{
        console.log("you entered:", chunk.toString())
    })

})
//gathering information about the process

console.log('Process ID:', process.pid);
console.log('Command-line args:', process.argv);
console.log('Memory:', process.memoryUsage());
console.log('Uptime:', process.uptime(), 'seconds');

//gathering information about os


console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Home Dir:', os.homedir());
