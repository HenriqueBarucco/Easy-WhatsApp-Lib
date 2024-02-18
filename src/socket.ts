import { io } from 'socket.io-client';
import * as dotenv from 'dotenv';
dotenv.config();

const EASY_WHATSAPP_API =
  process.env.EASY_WHATSAPP_API ||
  'https://easy-whatsapp-api.henriquebarucco.com.br/';

let socketInstance: any = null;

const initSocket = async (key: string) => {
  const socket = io(EASY_WHATSAPP_API, {
    autoConnect: true,
    reconnection: true,
    query: {
      key,
    },
  });

  socket.on('connect', () => {
    console.log('Connected to server');
  });

  return socket;
};

export const getSocketInstance = async (key: string) => {
  if (!socketInstance) {
    socketInstance = await initSocket(key);
  }
  return socketInstance;
};
