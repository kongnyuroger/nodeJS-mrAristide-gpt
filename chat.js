import EventEmitter from "node: events";

class chatRoom extends EventEmitter{
    send_message(user, message){
        this.emit('message', {user, message, timestamp: Date.now()})
    }
}

const chat = new chatRoom()

chat.on("message")