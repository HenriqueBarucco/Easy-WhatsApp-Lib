import EasyWhatsApp from './easy-whatsapp.js';

const connection = new EasyWhatsApp('my-key');

connection.receiveMessage((message) => {
  console.log('Message received:', message);
});
