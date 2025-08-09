export interface Message {
  name: string;
  phone: string;
  type: 'text' | 'image' | 'unknown';
  message: string;
  mimetype: string;
  caption: string | undefined;
  data: string | undefined;
  messageTimestamp: number;
}
