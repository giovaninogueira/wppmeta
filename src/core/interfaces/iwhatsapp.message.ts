import { IWhatsAppErrorAPI } from './iwhatsapp.service'

interface IResponseWhatsAppMessageSend {
  messagingProduct: 'whatsapp';
  contacts: {
    phoneNumber: string;
    whatsAppId: string;
  }[];
  messages: {
    wamId: string;
  }[];
}

interface IRequestWhatsAppMessageTextSend {
  recipientType?: 'individual';
  to: string;
  body: {
    useUrl: boolean;
    message: string;
  };
}

interface IRequestWhatsAppMessageMidiaSend {
  recipientType?: 'individual';
  to: string;
  mediaObjectId: string;
}

interface IRequestWhatsAppMessageLocationSend {
  recipientType?: 'individual';
  to: string;
  location: {
    longitude: string;
    latitude: string;
    name: string;
    address: string;
  };
}


interface IWhatsAppMessage {
  sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend >;
  sendMidia(message: IRequestWhatsAppMessageMidiaSend): Promise<IResponseWhatsAppMessageSend >;
  sendLocation(message: IRequestWhatsAppMessageLocationSend): Promise<IResponseWhatsAppMessageSend >;
}

export {
  IWhatsAppMessage,
  IResponseWhatsAppMessageSend,
  IRequestWhatsAppMessageTextSend,
  IRequestWhatsAppMessageMidiaSend,
  IRequestWhatsAppMessageLocationSend
}
