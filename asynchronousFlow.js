/*console.log("start")
setTimeout(()=>{ 
    console.log("from set time out")
},2000);

console.log("end")*/

function taskA(callback){
    setTimeout(()=>{
        console.log("A done")
        callback()
    },1000)
}

function taskB(callback){
    setTimeout(()=>{
        console.log("B done")
        callback()
    },500)
}

//seriel with callback
/*
taskA(()=>{
    taskB(()=>{
        console.log("we are done")
    })
    
})*/



// parallel with callback
/*
let count = 0;
function checkDone(){
    count++
    if(count === 2) {console.log("all done /parallel/")}
} 

taskA(checkDone)
taskB(checkDone)
*/

//using async/await
function taskAPromise(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("A done")
            resolve()
        },1000)
    }) ;
}

function taskBPromise(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("B done")
            resolve()
        },1000)
    }) ;
}
 //serial
async function runSerial() {
  await taskAPromise();
  await taskBPromise();
  console.log("All done (serial)");
}

runSerial();
