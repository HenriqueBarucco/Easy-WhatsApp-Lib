"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_js_1 = require("./socket.js");
class EasyWhatsApp {
    constructor(key) {
        this.receiveMessageCallback = () => { };
        this.initialize(key);
    }
    async initialize(key) {
        this.connection = await (0, socket_js_1.getSocketInstance)(key);
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
exports.default = EasyWhatsApp;
