import { io } from 'socket.io-client';
import * as dotenv from 'dotenv';

dotenv.config();

const EASY_WHATSAPP_API =
  process.env.EASY_WHATSAPP_API ||
  'https://easy-whatsapp-api.henriquebarucco.com.br/';

let socketInstance: any = null;

const initSocket = async (token: string) => {
  const socket = io(EASY_WHATSAPP_API, {
    autoConnect: true,
    reconnection: true,
    query: {
      token,
    },
  });

  socket.on('connect', () => {
    console.log(`Easy-WhatsApp Connected Successfully! 1.1.1`);
  });

  return socket;
};

export const getSocketInstance = async (token: string) => {
  if (!socketInstance) {
    socketInstance = await initSocket(token);
  }
  return socketInstance;
};
