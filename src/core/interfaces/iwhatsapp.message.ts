import { IWhatsAppErrorAPI } from './iwhatsapp.service'

interface IResponseWhatsAppMessageSend {
  messagingProduct: 'whatsapp';
  contacts: Array<{
    phoneNumber: string;
    whatsAppId: string;
  }>;
  messages: Array<{
    wamId: string;
  }>;
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
  sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI>;
  sendMidia(message: IRequestWhatsAppMessageMidiaSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI>;
  sendLocation(message: IRequestWhatsAppMessageLocationSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI>;
}

export {
  IWhatsAppMessage,
  IResponseWhatsAppMessageSend,
  IRequestWhatsAppMessageTextSend,
  IRequestWhatsAppMessageMidiaSend,
  IRequestWhatsAppMessageLocationSend
}
