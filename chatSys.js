
import EventEmitter from 'events';
const chatEmitter = new EventEmitter();


chatEmitter.on('newMessage', (msg) => {
  console.log(' Message:', msg);
});


chatEmitter.on('newMessage', (msg) => {
  console.log('You have a new message:', msg);
});

chatEmitter.on('newMessage', (msg) => {
  console.log('Message received at', new Date());
});

chatEmitter.once('newMessage', () => {
    console.log('message save to database')
});

chatEmitter.emit('newMessage', 'Hey Roger, you online?');

