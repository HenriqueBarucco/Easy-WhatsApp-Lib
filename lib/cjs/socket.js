"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocketInstance = void 0;
const socket_io_client_1 = require("socket.io-client");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const EASY_WHATSAPP_API = process.env.EASY_WHATSAPP_API ||
    'https://easy-whatsapp-api.henriquebarucco.com.br/';
let socketInstance = null;
const initSocket = async (token) => {
    const socket = (0, socket_io_client_1.io)(EASY_WHATSAPP_API, {
        autoConnect: true,
        reconnection: true,
        query: {
            token,
        },
    });
    socket.on('connect', () => {
        console.log('Connected to server');
    });
    return socket;
};
const getSocketInstance = async (token) => {
    if (!socketInstance) {
        socketInstance = await initSocket(token);
    }
    return socketInstance;
};
exports.getSocketInstance = getSocketInstance;
