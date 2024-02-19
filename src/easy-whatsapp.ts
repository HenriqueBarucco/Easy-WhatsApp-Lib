import { Socket } from 'socket.io-client';
import { getSocketInstance } from './socket.js';
import { Message } from './types/message.js';

export default class EasyWhatsApp {
  private connection: Socket | undefined;

  constructor(token: string) {
    this.initialize(token);
  }

  private async initialize(token: string) {
    this.connection = await getSocketInstance(token);
    this.setupListeners();
  }

  private setupListeners() {
    if (this.connection) {
      this.connection.on('message', (message: Message) => {
        this.handleReceivedMessage(message);
      });
    }
  }

  private handleReceivedMessage(message: Message) {
    this.receiveMessageCallback(message);
  }

  private receiveMessageCallback: (message: Message) => void = () => {};

  public receiveMessage(callback: (message: Message) => void): void {
    this.receiveMessageCallback = callback;
  }

  public sendMessage(phone: string, message: string) {
    if (this.connection) {
      this.connection.emit('message', {
        phone,
        message,
      });
    }
  }
}
