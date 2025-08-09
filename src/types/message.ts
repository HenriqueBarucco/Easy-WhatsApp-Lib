export interface Message {
  name: string;
  phone: string;
  group: string | undefined;
  type: 'text' | 'image' | 'unknown';
  message: string;
  mimetype: string;
  caption: string | undefined;
  data: string | undefined;
  messageTimestamp: number;
}
