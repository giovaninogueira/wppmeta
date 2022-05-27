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

interface IRequestWhatsAppMessageSend {
  messagingProduct: 'whatsapp';
  recipientType: 'individual';
  to: string;
  type?: string;
  text?: {
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
   * @param { IRequestWhatsAppMessageSend } message 
   * @returns Promise<IResponseWhatsAppMessageSend> 
   */
  send(message: IRequestWhatsAppMessageSend): Promise<IResponseWhatsAppMessageSend>;
}

export { IWhatsAppMessage, IResponseWhatsAppMessageSend, IRequestWhatsAppMessageSend }
