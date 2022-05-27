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
  phoneId: string;
  recipientType: 'individual';
  to: string;
  text: {
    previewUrl: boolean;
    body: string;
  };
  image?: {
    mediaObjectId: string;
  };
  location?: {
    longitude: number;
    latitude: number;
    name: number;
    address: number;
  };
}

interface IWhatsAppMessage {
  /**
   * To send a message for an number phone whatsapp.
   *  - Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_messaging permission
   * @param { IRequestWhatsAppMessageTextSend } message
   * @returns { Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI>} 
   */
  sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI>;
}

export { IWhatsAppMessage, IResponseWhatsAppMessageSend, IRequestWhatsAppMessageTextSend }
