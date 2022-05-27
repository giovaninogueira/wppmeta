import {
  IRequestWhatsAppMessageLocationSend,
  IRequestWhatsAppMessageMidiaSend,
  IRequestWhatsAppMessageTextSend,
  IResponseWhatsAppMessageSend,
} from './iwhatsapp.message';
import { IPhoneWhatsApp, IRegisterPhone } from './iwhatsapp.phone';

interface IWhatsApp {
  /**
   * With the phone number’s ID in hand, you can register it.
   * In the registration API call, you perform two actions at the same time
   *  - Register the phone.
   *  - Enable two-step verification by setting a 6-digit registration code
   * @param registerPhone
   * @returns { Promise<boolean > }
   */
  registerPhone(registerPhone: IRegisterPhone): Promise<boolean>;

  /**
   * Get phones of business account
   * @returns { Promise<IPhoneWhatsApp[] > }
   */
  getPhones(): Promise<IPhoneWhatsApp[]>;

  /**
   * To send a message for an number phone whatsapp.
   *  - Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_messaging permission
   * @param { IRequestWhatsAppMessageTextSend } message
   * @returns { Promise<IResponseWhatsAppMessageSend >}
   */
  sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend>;

  /**
   * To send a message type midia for an number phone whatsapp.
   *  - Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_messaging permission
   * @param { IRequestWhatsAppMessageMidiaSend } message
   * @returns { Promise<IResponseWhatsAppMessageSend >}
   */
  sendMidia(message: IRequestWhatsAppMessageMidiaSend): Promise<IResponseWhatsAppMessageSend>;

  /**
   * To send a message type location for an number phone whatsapp.
   *  - Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_messaging permission
   * @param { IRequestWhatsAppMessageMidiaSend } message
   * @returns { Promise<IResponseWhatsAppMessageSend >}
   */
  sendLocation(message: IRequestWhatsAppMessageLocationSend): Promise<IResponseWhatsAppMessageSend>;
}

export { IWhatsApp };
