import { Message } from './types/message.js';
export default class EasyWhatsApp {
    private connection;
    constructor(token: string);
    private initialize;
    private setupListeners;
    private handleReceivedMessage;
    private receiveMessageCallback;
    receiveMessage(callback: (message: Message) => void): void;
    sendMessage(phone: string, message: string): void;
}
