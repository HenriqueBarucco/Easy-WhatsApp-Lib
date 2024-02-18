"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const easy_whatsapp_js_1 = __importDefault(require("./easy-whatsapp.js"));
const connection = new easy_whatsapp_js_1.default('my-key');
connection.receiveMessage((message) => {
    console.log('Message received:', message);
});
