import { Message } from './types/message.js';
export default class EasyWhatsApp {
    private connection;
    constructor(key: string);
    private initialize;
    private setupListeners;
    private handleReceivedMessage;
    private receiveMessageCallback;
    receiveMessage(callback: (message: Message) => void): void;
}
