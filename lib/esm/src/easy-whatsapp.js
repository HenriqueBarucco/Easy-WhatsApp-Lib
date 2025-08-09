"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_js_1 = require("./socket.js");
class EasyWhatsApp {
    constructor(token) {
        this.receiveMessageCallback = () => { };
        this.initialize(token);
    }
    async initialize(token) {
        this.connection = await (0, socket_js_1.getSocketInstance)(token);
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
    sendMessage(phone, message) {
        if (this.connection) {
            this.connection.emit('message', {
                phone,
                message,
            });
        }
    }
}
exports.default = EasyWhatsApp;
