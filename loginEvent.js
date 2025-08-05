const EventEmitter = require("events")

const chartEvent = new EventEmitter()

chartEvent.on("login",(username) => {
    console.log(username)
})

chartEvent.emit("login", "Roger")