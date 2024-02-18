import { getSocketInstance } from './socket.js';
export default class EasyWhatsApp {
    constructor(key) {
        this.receiveMessageCallback = () => { };
        this.initialize(key);
    }
    async initialize(key) {
        this.connection = await getSocketInstance(key);
        this.setupListeners();
    }
    setupListeners() {
        if (this.connection) {
            this.connection.on('message', (message) => {
                this.handleReceivedMessage(message);
            });
        }
    }
    handleReceivedMessage(message) {
        this.receiveMessageCallback(message);
    }
    receiveMessage(callback) {
        this.receiveMessageCallback = callback;
    }
}
