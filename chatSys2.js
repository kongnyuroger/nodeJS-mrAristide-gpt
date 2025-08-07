const { EventEmitter, once } = require('events');

const chatEmitter = new EventEmitter();

const controller = new AbortController();
const { signal } = controller;

setTimeout(() => {
  controller.abort();
}, 5000);

setTimeout(() => {
  chatEmitter.emit('newMessage', 'Hey Roger, are you there?');
}, 3000);

(async () => {
  try {
    const [msg] = await once(chatEmitter, 'newMessage', { signal });
    console.log('New message received:', msg);
  } catch (err) {
    console.log('No new messages. Try again later.');
  }
})();
